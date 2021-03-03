require('dotenv').config();
const express = require('express'),
      { SERVER_PORT } = process.env,
      app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../build'));

app.listen(SERVER_PORT, () => console.log(`Impressing employers on port ${ SERVER_PORT }`));