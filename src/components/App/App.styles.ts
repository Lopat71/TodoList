import styled from "styled-components";

export const Container = styled.div`
  background: lawngreen;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const FilterButtons = styled.div`
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
