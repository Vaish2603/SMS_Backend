// services/attendanceServices.js
const db = require('../config/db');

exports.addBulkAttendance = async (records) => {
    // 1. Format incoming records into a nested values matrix array: [[student_id, date, status], [...]]
    const queryValues = records.map(item => [
        parseInt(item.student_id),
        item.date,
        item.status
    ]);

    // 2. SQL query targeting your multi-row schema with duplicate constraints handling
    const sql = `
        INSERT INTO attendance (student_id, date, status) 
        VALUES ? 
        ON DUPLICATE KEY UPDATE status = VALUES(status)
    `;

    // Note: If you are using db.execute(), it does not support bulk arrays '?' placeholders well. 
    // Use db.query() here for matrix expansion.
    return new Promise((resolve, reject) => {
        db.query(sql, [queryValues], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

exports.fetchByDate = async (date) => {
    const [rows] = await db.execute('SELECT student_id, status FROM attendance WHERE date = ?', [date]);
    return rows;
};