
const db = require('../config/db');

exports.fetchNotices = async () => {
    const [rows] = await db.execute('SELECT * FROM notices ORDER BY id DESC');
    return rows;
};

exports.addNotice = async (noticeData) => {
    const { title, description, file_path } = noticeData;
    const [result] = await db.execute(
        'INSERT INTO notices (title, description, file_path) VALUES (?, ?, ?)',
        [title, description, file_path]
    );
    return result;
};

exports.modifyNotice = async (id, noticeData) => {
    const { title, description, file_path } = noticeData;
    return await db.execute(
        'UPDATE notices SET title = ?, description = ?, file_path = ? WHERE id = ?',
        [title, description, file_path, id]
    );
};

exports.removeNotice = async (id) => {
    return await db.execute('DELETE FROM notices WHERE id = ?', [id]);
};