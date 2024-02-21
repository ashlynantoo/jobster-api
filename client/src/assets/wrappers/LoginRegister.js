import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  place-items: center;

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-color);
  }

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  h3 {
    text-align: center;
  }

  .btn {
    margin-top: 0.75rem;
  }

  .btn-hipster {
    margin-top: 1.15rem;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    color: var(--text-color);
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

export default Wrapper;
