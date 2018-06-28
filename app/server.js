const express = require('express');

// Constants
const SERVICE_NAME = process.env.SERVICE_NAME;
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    console.log(`service: ${SERVICE_NAME} is called`);
    res.send(`Hello world,Your in ${SERVICE_NAME}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
