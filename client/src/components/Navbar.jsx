import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";
import { geUserFromLocalStorage } from "../utils/localStorage";
import { clearJobStateValues } from "../features/job/jobSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const user = geUserFromLocalStorage();
  const navigate = useNavigate();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearJobStateValues());
    navigate("/landing");
  };

  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="logo-container">
            <button
              type="button"
              className="toggle-btn"
              onClick={handleSidebar}
            >
              <FaAlignLeft />
            </button>
            <Logo />
          </div>
          <h3 className="logo-text">dashboard</h3>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setShowLogout(!showLogout);
              }}
            >
              <FaUserCircle />
              {user?.name}
              <FaCaretDown />
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <button
                type="button"
                className="dropdown-btn"
                onClick={handleLogout}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
