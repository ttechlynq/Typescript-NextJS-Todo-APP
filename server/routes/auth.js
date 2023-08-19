const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//Temporary in-memory storage for users
const users = [];

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if(existingUser){
        return res.status(400).json({error: 'User already exists'});
    }
    const newUser = {
        id: uuidv4(),
        username,
        password
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

//Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
//Find user
    const user = users.find(user => user.username === username && user.password === password);
    if(!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
//Return user data, excluding passord for security
    const { id, username: foundUsername } = user;
    res.json({ id, username: foundUsername });

});

module.exports = router;