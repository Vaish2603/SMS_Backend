const db = require('../config/db');

exports.fetchEvents = async () => {
    const [rows] = await db.execute('SELECT * FROM events ORDER BY event_date ASC');
    return rows;
};

exports.addEvent = async (data) => {
    const { title, description, event_date, file_path } = data;
    const [result] = await db.execute(
        'INSERT INTO events (title, description, event_date, file_path) VALUES (?, ?, ?, ?)',
        [title, description, event_date, file_path]
    );
    return result;
};

exports.modifyEvent = async (id, data) => {
    const { title, description, event_date, file_path } = data;
    return await db.execute(
        'UPDATE events SET title = ?, description = ?, event_date = ?, file_path = ? WHERE id = ?',
        [title, description, event_date, file_path, id]
    );
};

exports.removeEvent = async (id) => {
    return await db.execute('DELETE FROM events WHERE id = ?', [id]);
};