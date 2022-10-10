const express = require('express');
const dotenv = require('dotenv').config();

const port = 5000;
const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, ()=> console.log(`server listen on port ${port}`));