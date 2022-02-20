import { useState } from "react";
import * as Styled from "./styles";

const TodoList = () => {
  const [newItemValue, setNewItemValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleChange = (e) => {
    setNewItemValue(e.target.value);
  };

  const addNewItem = () => {
    setListItems([...listItems, newItemValue]);
  };

  return (
    <Styled.Container>
      <input
        type="text"
        aria-label="new-todo-value"
        value={newItemValue}
        onChange={handleChange}
      />
      <button onClick={addNewItem}>Adicionar</button>
      {listItems.map((item, index) => (
        <li key={index} role="todo-item">
          {item}
        </li>
      ))}
    </Styled.Container>
  );
};

export { TodoList };
