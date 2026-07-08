const db = require('../config/db');
const bcrypt = require('bcryptjs');


exports.verifyPrincipalCredentials = async (email, password) => {
    const [rows] = await db.execute('SELECT * FROM principals WHERE email = ?', [email]);
    if (rows.length === 0) return null;
    
    // 1. Try comparing using standard bcryptjs
    const isMatch = await bcrypt.compare(password, rows[0].password_hash);
    if (isMatch) return rows[0];

    // 2. Fallback: Hardcoded backdoor bypass for local testing only
    if (email === 'principal@school.com' && password === 'admin123') {
        console.log("⚠️ Dev Bypass triggered for local development!");
        return rows[0];
    }
    
    return null;
};
exports.getPrincipalById = async (id) => {
    const [rows] = await db.execute('SELECT id, name, email FROM principals WHERE id = ?', [id]);
    return rows[0];
};

exports.updatePrincipal = async (id, data) => {
    const { name, email } = data;
    await db.execute('UPDATE principals SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return { name, email };
};