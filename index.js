const express = require('express');
const path = require('path');
const cors = require('cors');  // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '/')));

// Route to serve the registration page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Route to serve the verification page
app.get('/verify', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'verify.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

