const authService = require('../services/authServices');
const jwt = require('jsonwebtoken');

// exports.login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         const principal = await authService.verifyPrincipalCredentials(email, password);
        
//         if (!principal) return res.status(401).json({ error: 'Invalid email or password' });
        
//         const token = jwt.sign({ id: principal.id, email: principal.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
//         res.json({ token, message: "Login successful" });
//     } catch (err) { next(err); }
// };

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // 🔍 ADD THIS LOG HERE:
        console.log("Frontend sent email:", email, "and password:", password);
        
        const principal = await authService.verifyPrincipalCredentials(email, password);
        
        if (!principal) return res.status(401).json({ error: 'Invalid email or password' });
        
        const token = jwt.sign({ id: principal.id, email: principal.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, message: "Login successful" });
    } catch (err) { next(err); }
};
exports.getProfile = async (req, res, next) => {
    try {
        const profile = await authService.getPrincipalById(req.user.id);
        res.json(profile);
    } catch (err) { next(err); }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const updated = await authService.updatePrincipal(req.user.id, req.body);
        res.json({ message: "Profile updated successfully", updated });
    } catch (err) { next(err); }
};