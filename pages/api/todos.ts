import axios from 'axios';

interface TodoData {
    text: string;
}

export const createTodo = async (todoData: TodoData) => {
    const response = await axios.post('/api/todos', todoData);
    return response.data;
};

export const updateTodo = async (id: string, updateData: TodoData) => {
    const response = await axios.put(`/api/todos/${id}`, updateData);
    return response.data;
};

export const deleteTodo = async(id: string) => {
    const response = await axios.delete(`/api/todos/${id}`);
    return response.data;
}