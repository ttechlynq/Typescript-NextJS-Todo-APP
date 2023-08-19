import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../utils/api';

const TodoForm: React.FC = () => {
    const [ newTodo, setNewTodo ] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = async () => {
        try {
            const response = await createTodo(newTodo);

        }
    }
}