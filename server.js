
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const apiRoutes = require('./routes/combinedRoutes'); 
const pool = require('./config/db'); // Ensure this path correctly points to config/db.js

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/uploads', express.static('uploads'));

// --- Copy and paste this exact database connection check block ---
async function testDatabaseConnection() {
    try {
        // This executes a simple query to verify the connection works
        const [rows] = await pool.execute('SELECT 1');
        console.log('✅ Connected to the MySQL Database successfully.');
    } catch (err) {
        console.error('❌ Database connection failed!');
        console.error('Reason:', err.message);
    }
}
testDatabaseConnection();
// -----------------------------------------------------------------

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend server executing securely on port ${PORT}`);
});