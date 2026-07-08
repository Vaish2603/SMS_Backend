const eventService = require('../services/eventServices');

exports.getAll = async (req, res, next) => {
    try {
        const list = await eventService.fetchEvents();
        res.json(list);
    } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
    try {
        const { title, description, event_date } = req.body;
        const file_path = req.file ? `/uploads/${req.file.filename}` : null;

        if (!title || !description || !event_date) {
            return res.status(400).json({ error: "Title, Description, and Event Date are strictly required." });
        }

        const result = await eventService.addEvent({ title, description, event_date, file_path });
        res.status(201).json({ message: "Event created successfully!", id: result.insertId });
    } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, event_date } = req.body;
        
        // If a new file is uploaded, catch its path, otherwise check if previous path string was retained
        let file_path = req.file ? `/uploads/${req.file.filename}` : req.body.file_path;

        if (!title || !description || !event_date) {
            return res.status(400).json({ error: "All attributes are mandatory for editing." });
        }

        await eventService.modifyEvent(id, { title, description, event_date, file_path });
        res.json({ message: "Event updated successfully!" });
    } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
    try {
        await eventService.removeEvent(req.params.id);
        res.json({ message: "Event wiped cleanly from archive." });
    } catch (err) { next(err); }
};