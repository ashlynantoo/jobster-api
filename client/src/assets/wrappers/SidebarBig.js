import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;

    .sidebar-container {
      background: var(--white);
      height: 100%;
      min-height: 100vh;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
      box-shadow: var(--shadow-1);
    }

    .show-sidebar {
      margin-left: 0;
    }

    .content {
      position: sticky;
      top: 0;
    }

    header {
      height: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      display: flex;
      gap: 1rem;
      align-items: center;
      color: var(--para-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }

    .nav-link:hover {
      background: var(--bg-color);
      padding-left: 3rem;
      color: var(--text-color);
    }

    .nav-link:hover .icon {
      color: var(--primary-color);
    }

    .icon {
      font-size: 1.5rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }

    .active {
      color: var(--text-color);
    }
    .active .icon {
      color: var(--primary-color);
    }
  }
`;

export default Wrapper;
