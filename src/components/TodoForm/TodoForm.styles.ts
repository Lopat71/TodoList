import styled from "styled-components";

export const TodoFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border-radius: 8px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
  margin-right: 10px;
  background: lightgoldenrodyellow;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

export const Button = styled.button`
  background: lightgoldenrodyellow;
  color: black;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: yellow;
  }
`;
