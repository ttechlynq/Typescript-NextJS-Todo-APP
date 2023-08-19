import React, { useState } from 'react';
import { TodoData } from '../../utils/types';

interface TodoFormProps {
    onSubmit: (todo: TodoData) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
const = [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    const newTodo: TodoData = { title, completed: false };
    onSubmit(newTodo);
    setTitle('');
};

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text",
            value={title}
            onChane={(e) => setTitle(e.target.value)}
            placeholder="Enter activity" />
            <button type="submit">Submit</button>
    </form>
);
};

export default TodoForm;