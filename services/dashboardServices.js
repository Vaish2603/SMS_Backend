const db = require('../config/db');

exports.getCounterMetrics = async () => {
    const [[studentCount]] = await db.execute('SELECT COUNT(*) as students FROM students');
    const [[teacherCount]] = await db.execute('SELECT COUNT(*) as teachers FROM teachers');
    const [[pendingLeaves]] = await db.execute('SELECT COUNT(*) as leaves FROM leaves WHERE status = "Pending"');
    
    return {
        totalStudents: studentCount.students,
        totalTeachers: teacherCount.teachers,
        pendingLeaveRequests: pendingLeaves.leaves
    };
};