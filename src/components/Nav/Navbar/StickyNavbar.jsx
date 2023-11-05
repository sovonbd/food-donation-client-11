import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../Logo/Logo";
import { NavLink, Outlet } from "react-router-dom";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color=""
        className="p-1 text-[#1A2E35] font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "slide-underline active" : "slide-underline"
          }>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color=""
        className="p-1 text-[#1A2E35] font-medium">
        <NavLink
          to="/availableFoods"
          className={({ isActive }) =>
            isActive ? "slide-underline active" : "slide-underline"
          }>
          Available Foods
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color=""
        className="p-1 text-[#1A2E35] font-medium">
        <NavLink
          to="/addFood"
          className={({ isActive }) =>
            isActive ? "slide-underline active" : "slide-underline"
          }>
          Add Food
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color=""
        className="p-1 text-[#1A2E35] font-medium">
        <NavLink
          to="/manageMyFoods"
          className={({ isActive }) =>
            isActive ? "slide-underline active" : "slide-underline"
          }>
          Manage My Foods
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color=""
        className="p-1 text-[#1A2E35] font-medium">
        <NavLink
          to="/myFoodRequest"
          className={({ isActive }) =>
            isActive ? "slide-underline active" : "slide-underline"
          }>
          My Food Request
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="-my-2 max-h-[768px]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Typography as="a" href="/">
            <Logo></Logo>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                // variant="gradient"
                size="s"
                className="hidden lg:inline-block bg-green-600">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="#1A2E35"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="#1A2E35"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant=""
              size="sm"
              className="bg-green-600 text-base">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <div className="mt-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default StickyNavbar;
