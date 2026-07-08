const db = require('../config/db');

exports.fetchStudents = async (search, page, limit) => {
    const offset = (page - 1) * limit;
    const searchVal = `%${search}%`;

    const [data] = await db.execute(
        'SELECT * FROM students WHERE name LIKE ? OR roll_number LIKE ? LIMIT ? OFFSET ?',
        [searchVal, searchVal, limit.toString(), offset.toString()]
    );
    
    const [[countResult]] = await db.execute(
        'SELECT COUNT(*) as count FROM students WHERE name LIKE ? OR roll_number LIKE ?',
        [searchVal, searchVal]
    );

    return { data, total: countResult.count, page, limit };
};

exports.addStudent = async (student) => {
    const { name, roll_number, class_name, guardian_name } = student;
    const [result] = await db.execute(
        'INSERT INTO students (name, roll_number, class_name, guardian_name) VALUES (?, ?, ?, ?)',
        [name, roll_number, class_name, guardian_name]
    );
    return { id: result.insertId, ...student };
};

exports.modifyStudent = async (id, student) => {
    const { name, roll_number, class_name, guardian_name } = student;
    return await db.execute(
        'UPDATE students SET name = ?, roll_number = ?, class_name = ?, guardian_name = ? WHERE id = ?',
        [name, roll_number, class_name, guardian_name, id]
    );
};

exports.removeStudent = async (id) => {
    return await db.execute('DELETE FROM students WHERE id = ?', [id]);
};