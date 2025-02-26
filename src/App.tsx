import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./models/todo.model";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import TodoForm from "./components/TodoForm";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.div`
  background: lawngreen;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

  button {
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    background-color: #f0e68c;
    color: #333;
    border-radius: 8px;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;

    &:hover {
      background-color: #ffd700;
      transform: scale(1.05);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.4);
    }

    &.active {
      background-color: #ffd700;
      color: white;
      font-weight: bold;
    }
  }
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: uuidv4(), title, completed: false }]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Todo List</h1>
        <TodoCounter count={todos.length} />
        <TodoForm onAdd={addTodo} />

        <FilterButtons>
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            Show All
          </button>
          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            Show Active
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Show Completed
          </button>
        </FilterButtons>

        <TodoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onEdit={editTodo}
        />
      </Container>
    </>
  );
};

export default App;
