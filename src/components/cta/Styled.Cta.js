import styled from "styled-components";

export const StyledCta = styled.div`
  width: 500px;
  margin: 5rem auto;
  text-align: center;
  background-color: var(--translucent-black);
  /* backdrop-filter: blur(10px); */
  padding: 3.5rem;
  border-radius: 25px;

  .title {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--off-white);
    margin-bottom: 0.5rem;
  }

  .container-schedule {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--off-white);
      margin-bottom: 2rem;
    }

    span {
      display: block;
    }
  }

  .schedule {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--off-white);
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 2rem;
    color: black;
    border: none;
    background-color: var(--off-white);
  }

  button:hover {
    cursor: pointer;
  }
`;
