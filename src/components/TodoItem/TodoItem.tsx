import React, { useState } from "react";
import { Todo } from "../../models/todo.model";
import { TodoItemContainer } from "./TodoItem.styles";

interface Props {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  return (
    <TodoItemContainer>
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            className="save"
            onClick={() => {
              onEdit(todo.id, newTitle);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button className="cancel" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span>{todo.title}</span>
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
