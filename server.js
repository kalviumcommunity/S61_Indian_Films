const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PUBLIC_PORT || 3008;
app.use(express.json());

// define the ping route
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
})


if (require.main === module) {
    app.listen(port, () => {
        console.log(`🚀 server running on PORT: ${port}`);
    });
}

module.exports = app;