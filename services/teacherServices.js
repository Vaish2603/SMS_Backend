const db = require('../config/db');

exports.fetchTeachers = async () => {
    const [rows] = await db.execute('SELECT * FROM teachers');
    return rows;
};

exports.addTeacher = async (teacher) => {
    const { name, email, department, salary } = teacher;
    const [res] = await db.execute(
        'INSERT INTO teachers (name, email, department, salary) VALUES (?, ?, ?, ?)',
        [name, email, department, salary]
    );
    return { id: res.insertId, ...teacher };
};

exports.modifyTeacher = async (id, teacher) => {
    const { name, email, department, salary } = teacher;
    return await db.execute(
        'UPDATE teachers SET name = ?, email = ?, department = ?, salary = ? WHERE id = ?',
        [name, email, department, salary, id]
    );
};

exports.removeTeacher = async (id) => {
    return await db.execute('DELETE FROM teachers WHERE id = ?', [id]);
};