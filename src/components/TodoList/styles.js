import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 90%;
  max-width: 700px;
  min-height: 400px;
  margin: 0 auto;
  border: 1px solid white;
  background-color: red;
`;
