const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
const userRoutes = require('./routes/userRoutes');
const recordingRoutes = require('./routes/recordingRoutes');
app.use('/api/users', userRoutes);
app.use('/api/recordings', recordingRoutes);

app.get('/', (req, res) => {
  res.send('Memento Backend API');
});

module.exports = app;
