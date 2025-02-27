import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./models/todo.model";
import TodoList from "./components/TodoList/TodoList";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoForm from "./components/TodoForm/TodoForm";
import GlobalStyles from "./styles/GlobalStyles";
import { Container, FilterButtons } from "./components/App/App.styles";

enum Filter {
  All = "all",
  Active = "active",
  Completed = "completed",
}

const getTodosFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodosToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(getTodosFromLocalStorage);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  useEffect(() => {
    saveTodosToLocalStorage(todos);
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
    if (filter === Filter.Active) return !todo.completed;
    if (filter === Filter.Completed) return todo.completed;
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
            className={filter === Filter.All ? "active" : ""}
            onClick={() => setFilter(Filter.All)}
          >
            Show All
          </button>
          <button
            className={filter === Filter.Active ? "active" : ""}
            onClick={() => setFilter(Filter.Active)}
          >
            Show Active
          </button>
          <button
            className={filter === Filter.Completed ? "active" : ""}
            onClick={() => setFilter(Filter.Completed)}
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
