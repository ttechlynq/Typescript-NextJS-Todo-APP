import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
    return (
        <div>
            {todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </div>
    );
};