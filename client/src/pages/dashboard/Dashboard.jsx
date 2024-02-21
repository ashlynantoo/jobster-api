import { Outlet, redirect } from "react-router-dom";
import { Navbar, SidebarBig, SidebarSmall } from "../../components";
import Wrapper from "../../assets/wrappers/Dashboard";
import { geUserFromLocalStorage } from "../../utils/localStorage";

export const loader = () => {
  const user = geUserFromLocalStorage();
  if (!user) {
    return redirect("/landing");
  }
  return null;
};

const Dashboard = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SidebarSmall />
        <SidebarBig />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
