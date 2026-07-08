
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const noticeController = require('../controllers/noticeController');

// Configure upload folder and filename preservation naming conventions
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['.pdf', '.png', '.jpg', '.jpeg'];
    const ext = path.extname(file.originalname).toLowerCase();
    
    if (allowedExtensions.includes(ext)) {
        cb(null, true);
    } else {
        // This message will bubble directly back into your React front-end alert box!
        cb(new Error(`Extension "${ext}" is not supported. Please upload a PDF or an Image.`), false);
    }
};
const upload = multer({ storage, fileFilter });

router.get('/', noticeController.getAll);
router.post('/', upload.single('file'), noticeController.create); // 'file' matches front-end input key names
router.delete('/:id', noticeController.delete);
router.put('/:id', upload.single('file'), noticeController.update);

module.exports = router;

