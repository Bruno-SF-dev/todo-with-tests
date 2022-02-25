import { useState } from "react";
import * as Styled from "./styles";

const idGenerator = () => Math.floor(Math.random() * (20000 - 10000) + 10000);

const TodoList = () => {
  const [newItemValue, setNewItemValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleChange = (e) => {
    setNewItemValue(e.target.value);
  };

  const addNewItem = () => {
    setListItems([
      ...listItems,
      {
        id: idGenerator(),
        value: newItemValue,
      },
    ]);

    //clear input
    setNewItemValue("");
  };

  const removeItem = (itemId) => {
    setListItems(listItems.filter((item) => item.id !== itemId));
  };

  return (
    <Styled.Container>
      <Styled.Form>
        <input
          type="text"
          aria-label="new-todo-value"
          value={newItemValue}
          onChange={handleChange}
        />
        <button onClick={addNewItem}>Adicionar</button>
      </Styled.Form>
      {listItems.length > 0 && (
        <Styled.TodoItemsContainer>
          {listItems.map((item) => (
            <Styled.TodoItem key={item.id} role="todo-item">
              {item.value}
              <button
                onClick={() => removeItem(item.id)}
                data-testid="remove-todo-item"
              >
                Excluir
              </button>
            </Styled.TodoItem>
          ))}
        </Styled.TodoItemsContainer>
      )}
    </Styled.Container>
  );
};

export { TodoList };
