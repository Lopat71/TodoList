import styled from "styled-components";
export const TodoItemContainer = styled.div`
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
