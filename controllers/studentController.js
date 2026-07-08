const studentService = require('../services/studentServices');

exports.getAll = async (req, res, next) => {
    try {
        const search = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        
        const result = await studentService.fetchStudents(search, page, limit);
        res.json(result);
    } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
    try {
        const newStudent = await studentService.addStudent(req.body);
        res.status(201).json({ message: "Student record built successfully", newStudent });
    } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
    try {
        await studentService.modifyStudent(req.params.id, req.body);
        res.json({ message: "Student updated successfully" });
    } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
    try {
        await studentService.removeStudent(req.params.id);
        res.json({ message: "Student record dropped successfully" });
    } catch (err) { next(err); }
};