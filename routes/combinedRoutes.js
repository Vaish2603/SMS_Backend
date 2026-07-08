const express = require('express');
const router = express.Router();

// Import individual route files
const authRoutes = require('./authRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const leaveRoutes = require('./leaveRoutes');
const noticesRoutes = require('./noticeRoutes'); 
const eventRoutes = require('./eventRoutes'); 

// Centralized mount points
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/students', studentRoutes);
router.use('/teachers', teacherRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/leaves', leaveRoutes);
router.use('/notices', noticesRoutes); 
router.use('/events', eventRoutes);


module.exports = router;