import * as Styled from "./styles";

import { TodoList } from "../todoList";

const Home = () => {
  return (
    <Styled.Container>
      <div className="bg-header" />
      <TodoList />
    </Styled.Container>
  );
};

export { Home };
