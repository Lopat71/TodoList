import React, { useState } from "react";
import { Todo } from "../models/todo.model";
import styled from "styled-components";

interface Props {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: lightgoldenrodyellow;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  button {
    margin-left: 5px;
    border: none;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s;
  }

  .edit {
    background: #ffc107;
    color: white;
    &:hover {
      background: #d39e00;
    }
  }

  .delete {
    background: #dc3545;
    color: white;
    &:hover {
      background: #a71d2a;
    }
  }

  .save {
    background: #28a745;
    color: white;
    &:hover {
      background: #1e7e34;
    }
  }

  .cancel {
    background: gray;
    color: white;
    &:hover {
      background: darkgray;
    }
  }
`;

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
