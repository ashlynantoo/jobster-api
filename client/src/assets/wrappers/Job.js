import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    gap: 2rem;
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-color);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }

  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--para-color);
    }
  }

  .content {
    padding: 1rem 1.5rem;
    padding-bottom: 1.25rem;
  }

  .content-center {
    display: grid;
    row-gap: 0.5rem;

    @media (min-width: 425px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-lg);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
  }

  .pending {
    background: #fcefc7;
    color: #e9b949;
  }

  .interview {
    background: #e0e8f9;
    color: #647acb;
  }

  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }

  footer {
    margin-top: 1.2rem;
  }

  .edit-btn,
  .delete-btn {
    height: 30px;
  }

  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 1rem;
  }

  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
`;

export default Wrapper;
