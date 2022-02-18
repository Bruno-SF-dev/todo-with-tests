import { useState } from "react";
import * as Styled from "./styles";

const TodoList = () => {
  const [newItemValue, setNewItemValue] = useState("");

  return (
    <Styled.Container>
      <p>Hello, World</p>
    </Styled.Container>
  );
};

export { TodoList };
