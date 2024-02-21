import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }

  .show-sidebar {
    visibility: visible;
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: var(--white);
    width: var(--view-width);
    max-width: 325px;
    min-height: 90vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
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
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--text-color);
    transform: scale(1.05);
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
`;

export default Wrapper;
