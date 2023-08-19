const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(cors());
    server.use(express.json());

    //Import and use API
    const todosRoutes = require('./routes/todos');
    server.use('/api/todos', todosRoutes);
    server.get('*', req, res) => {
        return handle(req, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
});