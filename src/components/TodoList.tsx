import React from "react";
import { Todo } from "../models/todo.model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
