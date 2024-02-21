import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  .icon {
    font-size: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }

  .text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-sm);
  }
`;

export default Wrapper;
