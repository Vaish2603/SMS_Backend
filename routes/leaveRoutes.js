
const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

router.get('/', leaveController.getAll);
router.post('/', leaveController.create); // <--- ENSURE THIS ROUTE EXISTs
router.put('/:id/status', leaveController.updateStatus);

module.exports = router;