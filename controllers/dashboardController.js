const dashboardService = require('../services/dashboardServices');

exports.getMetrics = async (req, res, next) => {
    try {
        const data = await dashboardService.getCounterMetrics();
        res.json(data);
    } catch (err) { next(err); }
};