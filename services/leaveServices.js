

const db = require('../config/db');

exports.fetchLeaves = async () => {
    const [rows] = await db.execute(
        `SELECT l.*, t.name as teacher_name FROM leaves l 
         JOIN teachers t ON l.teacher_id = t.id ORDER BY l.id DESC`
    );
    return rows;
};

// ─── ADD THIS NEW ADDLEAVE SERVICE ────────────────────────────────
exports.addLeave = async (leaveData) => {
    const { teacher_id, start_date, end_date, reason } = leaveData;
    const [result] = await db.execute(
        'INSERT INTO leaves (teacher_id, start_date, end_date, reason) VALUES (?, ?, ?, ?)',
        [teacher_id, start_date, end_date, reason]
    );
    return result;
};
// ──────────────────────────────────────────────────────────────────

exports.changeStatus = async (id, status) => {
    return await db.execute('UPDATE leaves SET status = ? WHERE id = ?', [status, id]);
};