import styled from "styled-components";

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--white);
  border-radius: var(--border-radius);
  border-bottom: 5px solid ${(props) => props.color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    display: block;
    font-weight: 700;
    font-size: 3.25rem;
    color: ${(props) => props.color};
  }

  .icon {
    width: 4.25rem;
    height: 3.75rem;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-lg);
    text-align: left;
    margin-top: 0.5rem;
  }
`;

export default Wrapper;
