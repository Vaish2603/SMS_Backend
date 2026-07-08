// const noticeService = require('../services/noticeServices');

// exports.getAll = async (req, res, next) => {
//     try {
//         const list = await noticeService.fetchNotices();
//         res.json(list);
//     } catch (err) { next(err); }
// };

// exports.create = async (req, res, next) => {
//     try {
//         const { title, description } = req.body;
//         if (!title || !description) {
//             return res.status(400).json({ error: "Title and Description are strictly required." });
//         }
//         const result = await noticeService.addNotice({ title, description });
//         res.status(201).json({ message: "Notice published successfully!", id: result.insertId });
//     } catch (err) { next(err); }
// };

// exports.delete = async (req, res, next) => {
//     try {
//         await noticeService.removeNotice(req.params.id);
//         res.json({ message: "Notice deleted cleanly from the board." });
//     } catch (err) { next(err); }
// };

const noticeService = require('../services/noticeServices');

exports.getAll = async (req, res, next) => {
    try {
        const list = await noticeService.fetchNotices();
        res.json(list);
    } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        // Access path compiled by Multer middleware interceptor safely
        const file_path = req.file ? `/uploads/${req.file.filename}` : null;

        if (!title || !description) {
            return res.status(400).json({ error: "Title and Description are required parameters." });
        }

        const result = await noticeService.addNotice({ title, description, file_path });
        res.status(201).json({ message: "Notice published safely!", id: result.insertId });
    } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        
        // If a new file is uploaded, catch its path; otherwise check if the previous path string was retained
        let file_path = req.file ? `/uploads/${req.file.filename}` : req.body.file_path;

        if (!title || !description) {
            return res.status(400).json({ error: "Title and Description are required parameters." });
        }

        await noticeService.modifyNotice(id, { title, description, file_path });
        res.json({ message: "Notice updated successfully!" });
    } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
    try {
        await noticeService.removeNotice(req.params.id);
        res.json({ message: "Notice dropped successfully." });
    } catch (err) { next(err); }
};