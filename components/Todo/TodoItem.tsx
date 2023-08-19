import React from 'react';
import { TodoData } from '../../utils/types';

interface TodoItemProps {
    todo: TodoData;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo: onDelete}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;