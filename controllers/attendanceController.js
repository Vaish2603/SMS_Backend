const attendanceService = require('../services/attendanceServices');


exports.saveBulk = async (req, res, next) => {
    try {
        const { date, records } = req.body;

        if (!records || !Array.isArray(records) || records.length === 0) {
            return res.status(400).json({ error: "Attendance records dataset is completely missing." });
        }

        // Pass the array to the service layer
        await attendanceService.addBulkAttendance(records);
        
        res.json({ success: true, message: "Attendance register updated successfully!" });
    } catch (err) { 
        console.error("Controller Error:", err);
        next(err); 
    }
};


exports.getByDate = async (req, res, next) => {
    try {
        const { date } = req.query;
        const list = await attendanceService.fetchByDate(date);
        res.json(list);
    } catch (err) { next(err); }
};