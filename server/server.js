require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const todosRouter = require('./routes/todos');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:3000']

app.use(cors({
    origin: allowedOrigins,
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/todos', todosRouter);
app.use('/api/auth', authRouter);

app.get('/api/user', (req, res) => {
    const { DEFAULT_USERNAME, DEFAULT_PASSWORD } = process.env;
    const user = {
        username: DEFAULT_USERNAME,
    };

    const providedPassword = req.query.password;
    if (providedPassword === DEFAULT_PASSWORD){
        res.json(user);
    }else{
        res.status(401).json({error: 'Invalid credentials'});
    }


});

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });
