import React from "react";

interface Props {
  count: number;
}

const TodoCounter: React.FC<Props> = ({ count }) => {
  return <h2>Total tasks: {count}</h2>;
};

export default TodoCounter;
