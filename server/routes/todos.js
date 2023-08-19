

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//Temporary in memory sorage
const todos = [];

//Fetch all todos
router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
   try {
    const { text } = req.body;
    const newTodo = {
        id: uuidv4(),
        text,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
    }catch(error){
    console.error('error adding TODO', error);
    res.status(500).json({error: 'Internal server error'});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { text } = req.body;

const todo = todos.find(todo => todo.id === id);
if (!todo) {
    return res.status(404).json({error: 'Item not found'});
}
todo.text = text;
res.json(todo);

})

//Dlete API
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({error: 'Item not found'});
    }
    todos.splice(todoIndex, 1);
    res.sendStatus(204);
});

module.exports = router;