const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // auto read body of json
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = "MONGO.uri";
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    // useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})