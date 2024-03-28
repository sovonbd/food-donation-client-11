import StickyNavbar from "../components/Nav/Navbar/StickyNavbar";
import ReturnPortfolio from "../components/ReturnPortfolio/ReturnPortfolio";

const MainLayout = () => {
  return (
    <div>
      <ReturnPortfolio />
      <StickyNavbar></StickyNavbar>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default MainLayout;
