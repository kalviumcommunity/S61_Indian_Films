const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT;

// define the ping route
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Error handling for missing PUBLIC_PORT environment variable
if (!process.env.PUBLIC_PORT) {
    console.error('Error: PUBLIC_PORT environment variable is not set. Using default port 3000.');
}

if (require.main === module) {
    app.listen(port, () => {
        console.log(`🚀 server running on PORT: ${port}`);
    });
}

module.exports = app;