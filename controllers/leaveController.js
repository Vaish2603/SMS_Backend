

const leaveService = require('../services/leaveServices');

exports.getAll = async (req, res, next) => {
    try {
        const list = await leaveService.fetchLeaves();
        res.json(list);
    } catch (err) { next(err); }
};

// ─── ADD THIS NEW CREATE FUNCTION ─────────────────────────────────
exports.create = async (req, res, next) => {
    try {
        const { teacher_id, start_date, end_date, reason } = req.body;
        
        if (!teacher_id || !start_date || !end_date || !reason) {
            return res.status(400).json({ error: "All leave payload parameters are required." });
        }

        const result = await leaveService.addLeave({ teacher_id, start_date, end_date, reason });
        res.status(201).json({ message: "Leave applied successfully!", id: result.insertId });
    } catch (err) { next(err); }
};
// ──────────────────────────────────────────────────────────────────

exports.updateStatus = async (req, res, next) => {
    try {
        const { status } = req.body; // Approved or Rejected
        await leaveService.changeStatus(req.params.id, status);
        res.json({ message: `Leave profile has been evaluated to: ${status}` });
    } catch (err) { next(err); }
};