const teacherService = require('../services/teacherServices');

exports.getAll = async (req, res, next) => {
    try {
        const teachers = await teacherService.fetchTeachers();
        res.json(teachers);
    } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
    try {
        const teacher = await teacherService.addTeacher(req.body);
        res.status(201).json(teacher);
    } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
    try {
        await teacherService.modifyTeacher(req.params.id, req.body);
        res.json({ message: "Teacher information modified" });
    } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
    try {
        await teacherService.removeTeacher(req.params.id);
        res.json({ message: "Teacher record deleted" });
    } catch (err) { next(err); }
};