import axios from 'axios';
import { TodoData } from './types';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [data => JSON.stringify(data)],
});

// export const fetchTodos = async () => {
//     const response = await instance.get('/api/todos');
//     return response.data;
// };

export const fetchTodos = async () => {
    try{
        const response = await instance.get('api/todos');
        return response.data;
    } catch (error) {
    console.error('error fetching items', error);
    throw error;
    }
};


export const createTodo = async (todoData: TodoData) => {
    try {
        const response = await instance.post('/api/todos', todoData);
//     const response = await axios.post('/api/todos', todoData);
    return response.data;
}catch(error){
    console.error('Error creating activity', error);
    throw error;
}
};

export const updateTodo = async (id: string, updatedTodoData: TodoData) => {
try {
      const response = await instance.put(`/api/todos/${id}`, updatedTodoData);

//     const response = await axios.put(`/api/todos/${id}`, updatedTodoData);
    return response.data;
}catch(error){
    console.error('Error updating activity', error);
    throw error;
}
};

export const deleteTodo = async (id: string) => {
try {
        const response = await instance.delete(`/api/todos/${id}`);
//     const response = await axios.delete(`/api/todos/${id}`);
    return response.data;
}catch(error){
    console.error('Error deleting activity', error);
    throw error;
}
};
export default instance;