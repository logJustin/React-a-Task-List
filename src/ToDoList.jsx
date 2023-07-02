import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './ToDoForm';
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return [];
    return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData)

    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos])

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(t => {
                if (t.id === id) {
                    return { ...t, completed: !t.completed };
                } else {
                    return t;
                }
            });
        });
    };
    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                m: 3,
                bgcolor: 'rgb(39,39,39)',
                borderRadius: '13px'
            }}
            >
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '10px' }}>
                    To Do List
                </Typography>
                <List sx={{
                    width: '100%',
                    maxWidth: 480,
                    bgcolor: 'rgb(39,39,39)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: 2
                }}>
                    {todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            remove={removeTodo}
                            toggle={() => { toggleTodo(todo.id) }}
                        />
                    ))}
                    <TodoForm addTodo={addTodo} />
                </List>

            </Box>
        </Box>

    )
}