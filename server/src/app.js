const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); 


dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
const userRoutes = require('./routes/userRoutes');
const recordingRoutes = require('./routes/recordingRoutes');
const aiRoutes = require('./routes/aiRoutes');
const imageRoutes = require('./routes/imageRoutes');

app.use('/api/users', userRoutes);
app.use('/api/recordings', recordingRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Memento Backend API');
});

module.exports = app;
