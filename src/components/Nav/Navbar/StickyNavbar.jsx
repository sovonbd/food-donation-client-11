import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

import Logo from "../Logo/Logo";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const StickyNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
          to="/requestFood"
          className={({ isActive }) =>
            isActive ? "slide-underline active" : "slide-underline"
          }>
          My Food Request
        </NavLink>
      </Typography>
    </ul>
  );

  const profileMenuItems = [
    {
      label: `${user?.displayName ? user?.displayName : user?.email}`,
      icon: UserCircleIcon,
    },
    // {
    //   label: "Edit Profile",
    //   icon: Cog6ToothIcon,
    // },
    // {
    //   label: "Inbox",
    //   icon: InboxArrowDownIcon,
    // },
    // {
    //   label: "Help",
    //   icon: LifebuoyIcon,
    // },
    {
      label: <div onClick={logOut}>Sign Out</div>,
      icon: PowerIcon,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  // function ProfileMenu() {

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
              {user ? (
                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  placement="bottom-end">
                  <MenuHandler>
                    <Button
                      variant="text"
                      color="blue-gray"
                      className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt=""
                        className="border border-gray-900 p-0.5"
                        src={
                          user.photoURL !== "null"
                            ? user.photoURL
                            : "https://i.imgur.com/rzbB2Jt.png"
                        }
                      />

                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList className="p-1">
                    {profileMenuItems.map(({ label, icon }, key) => {
                      const isLastItem = key === profileMenuItems.length - 1;
                      return (
                        <MenuItem
                          key={label}
                          onClick={closeMenu}
                          className={`flex items-center gap-2 rounded ${
                            isLastItem
                              ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                              : ""
                          }`}>
                          {React.createElement(icon, {
                            className: `h-4 w-4 ${
                              isLastItem ? "text-red-500" : ""
                            }`,
                            strokeWidth: 2,
                          })}
                          <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color={isLastItem ? "red" : "inherit"}>
                            {label}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              ) : (
                <Link to="/login">
                  <Button
                    // variant="gradient"
                    size="s"
                    className="hidden lg:inline-block bg-green-600">
                    <span>Sign in</span>
                  </Button>
                </Link>
              )}
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
          {user ? (
            ""
          ) : (
            <div className="flex items-center gap-x-1 w-full">
              <Link to="/login">
                <Button
                  fullWidth
                  variant=""
                  size="sm"
                  className="bg-green-600 text-base">
                  <span>Sign in</span>
                </Button>
              </Link>
            </div>
          )}
        </MobileNav>
      </Navbar>
      <div className="mt-2">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default StickyNavbar;
