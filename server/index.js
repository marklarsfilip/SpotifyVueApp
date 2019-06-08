const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const track = require('./routes/api/track');
app.use('/api/track', track);

const data = require('./routes/api/trackList');
app.use('/api/trackList', data);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));