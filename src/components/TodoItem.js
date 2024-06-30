import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        onClick={() => toggleTodo(todo.id)}
      />
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TodoItem;
