require('dotenv').config();
const express = require('express'),
      path = require('path'),
      { SERVER_PORT } = process.env,
      app = express();

app.use(express.json());
// app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.listen(SERVER_PORT, () => console.log(`Impressing employers on port ${ SERVER_PORT }`));