const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const eventController = require('../controllers/eventController');

// 1. Setup Storage Location (Ensure an 'uploads' directory exists in backend root)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// 2. Filter formats for Images, PDFs, and Videos
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['.pdf', '.png', '.jpg', '.jpeg', '.mp4', '.mkv', '.mov'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error('Format not supported. Upload only PDFs, Images, or MP4/MKV/MOV Videos.'), false);
    }
};

const upload = multer({ 
    storage, 
    fileFilter,
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB Max limit for videos
});

// 3. Form Interceptor Wrapper Middleware
const handleUpload = (req, res, next) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        next();
    });
};

// 4. Routes mapping Full CRUD
router.get('/', eventController.getAll);
router.post('/', handleUpload, eventController.create);
router.put('/:id', handleUpload, eventController.update);
router.delete('/:id', eventController.delete);

module.exports = router;