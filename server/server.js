const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Use the CORS middleware
app.use(cors({
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST'],
    credentials: true 
}));

app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const userData = req.body;
    users.push(userData);
    console.log('Received user data:', userData);
    res.status(201).json({ message: 'User data received', data: userData });
});

app.listen(PORT, () => {
    console.log(`Server is running on port $${PORT}`);
});