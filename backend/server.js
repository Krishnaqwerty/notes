// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesRoute = require('./routes/notes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/short-notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/notes', notesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
