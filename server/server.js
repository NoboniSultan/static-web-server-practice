const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
// the file path to the dist directory
const pathToFrontend = path.join(__dirname, '../frontend/dist');

// generate middleware using the file path
const serveStatic = express.static(pathToFrontend);

// Register the serveStatic middleware before the remaining controllers
app.use(serveStatic);

// Middleware function for logging route requests
// Log routes
// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};
// Register the logRoutes middleware globally to log all requests
app.use(logRoutes);

// other controllers 
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes');

// Register the logRoutes middleware globally to log all requests
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});