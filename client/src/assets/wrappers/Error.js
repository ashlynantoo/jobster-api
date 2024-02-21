import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  text-align: center;

  img {
    width: 90vw;
    max-width: var(--fixed-width);
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
