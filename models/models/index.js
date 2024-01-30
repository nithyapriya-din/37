const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
