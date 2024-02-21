import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 3rem;

  h4 {
    text-transform: none;
    font-weight: 500;
    padding: 0 0.5rem;
  }

  .empty {
    text-align: center;
    padding: 0 2rem;
  }

  .jobs {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Wrapper;
