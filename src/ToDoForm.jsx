import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('')
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('')
    }
    return (
        <ListItem sx={{
            justifyContent: 'center'
        }}>
            <form onSubmit={handleSubmit}>
                <TextField

                    id="filled-basic"
                    label="Add task"
                    variant="filled"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    type='submit'
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>

        </ListItem>
    );
}