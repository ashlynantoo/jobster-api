import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);

  nav {
    width: 100%;
  }

  .nav-center {
    width: var(--view-width);
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-color);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .logo-text {
    display: none;
    margin: 0;
  }

  .btn-container {
    position: relative;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    position: relative;
    box-shadow: var(--shadow-2);
    padding: 0.3rem 0.5rem;
  }

  .dropdown {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    background: var(--bg-color);
    box-shadow: var(--shadow-2);
    padding: 0.3rem 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .show-dropdown {
    top: 40px;
    visibility: visible;
  }

  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-color);
    letter-spacing: var(--letter-spacing-sm);
    text-transform: capitalize;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }

    .logo {
      display: none;
    }

    .logo-text {
      display: block;
    }
  }
`;

export default Wrapper;
