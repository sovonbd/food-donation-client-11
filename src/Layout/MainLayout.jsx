import { Outlet } from "react-router-dom";
import StickyNavbar from "../components/Nav/Navbar/StickyNavbar";

const MainLayout = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
