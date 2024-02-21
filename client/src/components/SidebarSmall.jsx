import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SidebarSmall";
import { toggleSidebar } from "../features/user/userSlice";
import { Logo, NavLinks } from "../components";

const SidebarSmall = () => {
  const { isSidebarOpen } = useSelector((store) => {
    return store.userState;
  });
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <aside
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={closeSidebar} />
        </div>
      </aside>
    </Wrapper>
  );
};

export default SidebarSmall;
