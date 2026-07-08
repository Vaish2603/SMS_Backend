const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', teacherController.getAll);
router.post('/', teacherController.create);
router.put('/:id', teacherController.update);
router.delete('/:id', teacherController.delete);

module.exports = router;