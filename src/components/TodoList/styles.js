import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  min-height: 400px;
  margin: -20px auto 0px;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
`;

export const Form = styled.div`
  display: flex;

  input {
    flex: 1;
    background-color: rgba(250, 250, 250, 0.9);
    padding: 10px 5px;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 4px 12px;
    border-radius: 0 4px 4px 0;
  }
`;

export const TodoItemsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 0px 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.textPrimary};

  button {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 4px 8px;
    border-radius: 4px;
  }
`;
