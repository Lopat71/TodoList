import React, { useState } from "react";
import { TodoFormContainer, Input, Button } from "./TodoForm.styles";

interface Props {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.length > 0) {
      onAdd(title);
      setTitle("");
    } else {
      alert("Add title pls...");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <TodoFormContainer>
      <Input
        type="text"
        placeholder="New todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleAdd}>Add</Button>
    </TodoFormContainer>
  );
};

export default TodoForm;
