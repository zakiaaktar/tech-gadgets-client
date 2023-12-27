import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import Sidebar from "../pages/Dashboard/Shared/Sidebar/Sidebar";
import Topbar from "../pages/Dashboard/Shared/Topbar/Topbar";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <section>
      <Helmet>
        <title>Tech Gadgets | Dashboard</title>
      </Helmet>
      <div className="md:grid grid-cols-4">
        <div className="hidden md:block">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-3">
          <div className="md:hidden">
            <Topbar></Topbar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
