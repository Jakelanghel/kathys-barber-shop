import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 1rem 3rem;
  backdrop-filter: blur(10px);

  text-align: center;
  color: var(--off-white);
  letter-spacing: 2px;

  img {
    width: 35px;
  }

  a {
    display: block;
    font-size: 1.15rem;
    text-decoration: none;
    color: var(--off-white);
  }

  .brand {
    font-size: 3.5rem;
    font-weight: 700;
  }
`;
