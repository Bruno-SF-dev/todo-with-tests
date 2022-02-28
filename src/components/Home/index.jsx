import * as Styled from "./styles";

import { TodoList } from "../TodoList";

const Home = () => {
  return (
    <Styled.Container>
      <div className="bg-header">
        <h2>Lista de Tarefas</h2>
      </div>
      <TodoList />
    </Styled.Container>
  );
};

export { Home };
