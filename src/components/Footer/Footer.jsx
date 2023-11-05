import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import Logo from "../Nav/Logo/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A2E35] p-8">
      <div className="flex flex-col md:flex-row flex-wrap md:items-center justify-around w-4/5 lg:w-2/3 mx-auto gap-y-10 lg:gap-y-6 gap-x-12 text-white text-center md:justify-between">
        <Link to="/" className="text-left">
          <Logo></Logo>
          <p>Donate Nosh Inc.</p>
          <p>Doing charity since 2000</p>
        </Link>
        <ul className="text-left gap-y-2 gap-x-8">
          <h3 className="text-base pb-4">Company</h3>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-green-600 focus:text-green-600">
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-green-600 focus:text-green-600">
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-green-600 focus:text-green-600">
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-green-600 focus:text-green-600">
              Terms of use
            </Typography>
          </li>
        </ul>
        <div className="flex flex-col gap-6 text-white">
          <div className="text-left text-sm">
            <h3 className="text-[17px] -mt-1 pb-5">Contact</h3>
            <div className="text-sm">
              <p>Suite 800</p>
              <p>120 Bremner Blvd.</p>
              <p>Toronto, ON M5J 0A8</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube></FaYoutube>
            </a>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram></FaInstagram>
            </a>
            <a href="https://www.pinterest.ca/">
              <FaPinterestP></FaPinterestP>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4 border-blue-gray-50 w-11/12 lg:w-3/4 mx-auto" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 Donate Nosh
      </Typography>
    </footer>
  );
};

export default Footer;
