import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  .bg-header {
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.darkSecondary};
  }
`;
