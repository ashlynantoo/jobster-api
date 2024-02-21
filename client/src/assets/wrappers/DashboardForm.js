import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  width: 100%;
  padding: 3rem 2rem;

  .form {
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    max-width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    gap: 1rem;
  }

  .form-center button {
    align-self: end;
    height: 2rem;
    margin-top: 0.75rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-self: flex-end;
  }

  .clear-btn {
    background: var(--para-color);
  }

  .clear-btn:hover {
    background: var(--black);
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .btn-container {
      margin-top: 0;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
