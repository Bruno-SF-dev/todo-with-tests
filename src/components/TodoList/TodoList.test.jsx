import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { TodoList } from ".";

describe("Todo List Component", () => {
  test("Should render input", () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>,
    );

    expect(getByLabelText("new-todo-value")).toBeInTheDocument();
  });

  test("Should render empty list", () => {
    const { queryByRole } = render(
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>,
    );

    expect(queryByRole("todo-item")).not.toBeInTheDocument();
  });

  test("Should add and render new item", () => {
    const { getByText, getByRole, getByLabelText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>,
    );

    const newItemInput = getByLabelText("new-todo-value");
    const addBtn = getByRole("button", { name: "Adicionar" });

    expect(queryByText("Um novo item.")).not.toBeInTheDocument();

    userEvent.type(newItemInput, "Um novo item.");
    userEvent.click(addBtn);
    userEvent.clear(newItemInput);

    userEvent.type(newItemInput, "Outro novo item.");
    userEvent.click(addBtn);
    userEvent.clear(newItemInput);

    expect(queryByText("Um novo item.")).toBeInTheDocument();
  });
});
