import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SidebarBig";
import { Logo, NavLinks } from "../components";

const SidebarBig = () => {
  const { isSidebarOpen } = useSelector((store) => {
    return store.userState;
  });

  return (
    <Wrapper>
      <aside
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </aside>
    </Wrapper>
  );
};

export default SidebarBig;
