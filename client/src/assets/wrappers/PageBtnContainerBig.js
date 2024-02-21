import styled from "styled-components";

const Wrapper = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .btn-container {
    background: var(--primary-100);
  }

  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 3rem;
    height: 2.5rem;
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--primary-color);
    transition: var(--transition);
    cursor: pointer;
  }

  .prev-btn,
  .next-btn {
    width: 5rem;
    height: 2.5rem;
    background: var(--white);
    border-color: transparent;
    color: var(--primary-color);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .active,
  .pageBtn:hover,
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-color);
    color: var(--white);
  }
`;

export default Wrapper;
