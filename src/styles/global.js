import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,300&display=swap');

* {
  margin: 0;
  padding: 0;
  border:none;
  box-sizing: border-box;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${({ theme }) => theme.colors.darkPrimary};
}

button {
  background-color: transparent;
  cursor: pointer;
}

#root {
  min-height: 100vh;
}
`;
