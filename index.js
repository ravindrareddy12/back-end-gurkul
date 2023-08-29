const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db')
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use('/', require('./routers'));


const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});