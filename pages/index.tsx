import Head from 'next/head'
import axios from '../utils/api';
import React, { useState, useEffect } from 'react';
import AuthForm from '../components/Auth/AuthForm';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import styles from '../styles/Home.module.css'

const MainContainer = styled.div`
    padding: 20px;
`;

const TodoList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TodoItem = styled.li`
    margin: 10px 0;
    display: flex;
    align-items: center;
    input[type='text']{
        flex-grow: 1;
        padding: 5px;
    }
    button {
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
`;
const Home = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [user, setUser] = useState(null);
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editedTodoText, setEditedTodoText] = useState('');
    const loggedInUser = useSelector(state => state.user);

    useEffect(() => {
        axios.get('/api/todos').then((response) => {
            setTodos(response.data);
        });

        axios.get('/api/user').then((response) => {
            setUser(response.data);
        });
    }, []);


const handleAddTodo = () => {
    const todoData = { text: newTodo }; // Create an object with the data

    axios.post('/api/todos', todoData, {
        headers: {
            'Content-Type': 'application/json', // Set the correct content type
        },
    })
    .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
    })
    .catch((error) => {
        console.error('Error encountered while adding an activity:', error);
    });
};


const handleDeleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
    .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
    })
    .catch((error) => {
        console.error('Unable todo delete todo:', error);
    });
};

const handleEditTodo = (id) => {
    setEditingTodoId(id);
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
        setEditedTodoText(todoToEdit.text);
    }
} ;

const handleSaveEdit = (id) => {
    axios.put(`/api/todos/${id}`, {text: editedTodoText})
    .then((response) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: editedTodoText };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditingTodoId(null);
        setEditedTodoText('');
    })
    .catch((error) => {
        console.error('Error encountered while updating an activity:', error);
    });
};

// const handleSubmitLoginForm = async (formDta) => {
//     try{
//         const response = await axios.get('/api/user', {
//             params: {
//             password: formDta.password, },
//         });
//         const user = response.data;
//         console.log('Logged in', user);
//     } catch(error){
//         console.error('Error encountered during loggedInUser', error);
//     }
 //};


  return (
  <MainContainer>
    <div>
        <Head>
            <title>Activity Tracking APP</title>
        </Head>
        <h1> Welcome</h1>
{/*         { loggedInUser ? ( */}
        <div>
{/*         <p>Welcome, {loggedInUser.username}!</p> */}
        <div>
        <h2>Add an Item</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <div>
            <h2>Add an Activity</h2>
            <TodoList>
{/*             <ul> */}
                {todos.map((todo) => (
//                     <li key={todo._id}>
//                         <li key={todo.id}>
                            <TodoItem key={todo.id}>
                        {editingTodoId === todo.id ? (
                        <>
                            <input
                                type='text'
                                value={editedTodoText}
                                onChange={(e) => setEditedTodoText(e.target.value)}
                            />
                            <button onClick={() => handleSaveEdit(todo.id)}>Persist</button>
                            </>
                            ) : (
                            <>
                            {todo.text}
                            <button onClick={() => handleEditTodo(todo.id)}>Update</button>
                             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                             </>
                     )}
                     </TodoItem>
//                     </li>
                 ))}
{/*                  </ul> */}
 </TodoList>
                 </div>
                
                 </div>
{/*            ) : ( */}
{/*             <div> */}

{/* </di> */}
        </div>
        </MainContainer>
        );
    
    };
//     </div>
//   );
// };

export default Home
