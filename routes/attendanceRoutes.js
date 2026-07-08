// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/', attendanceController.getByDate);
router.post('/bulk', attendanceController.saveBulk); // <--- Make sure this points to your new controller method

module.exports = router;