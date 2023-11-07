import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import React from "react";

import { FcGoogle } from "react-icons/fc";

import loginAnimation from "../../assets/loginAnimation.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Successfully logged in",
          confirmButtonColor: "#4ca048b7",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
          confirmButtonColor: "#4ca048b7",
        });
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Successfully logged in",
          confirmButtonColor: "#4ca048b7",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
          confirmButtonColor: "#4ca048b7",
        });
      });
  };
  return (
    <div
      data-aos="zoom-in"
      className="relative my-10 md:my-20 flex flex-col md:flex-row-reverse justify-center lg:gap-20">
      <Lottie
        animationData={loginAnimation}
        loop={true}
        className="hidden w-1/3 lg:inline"
      />
      <Card className="w-11/12 mx-auto md:mx-0 md:w-96 py-4">
        <CardHeader
          variant=""
          color="gray"
          className="mb-4 grid relative top-10 h-28 place-items-center bg-green-600 uppercase">
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="relative top-10 flex flex-col gap-4">
            <Input type="email" name="email" label="Email" size="lg" />
            <Input type="password" name="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="relative top-7 pt-0">
            <Button type="submit" variant="" fullWidth className="bg-green-600">
              Sign In
            </Button>
          </CardFooter>
        </form>
        <div className="px-6">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/register"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold text-green-600">
              Sign Up
            </Typography>
          </Typography>
          <div
            className="my-6 text-center border-b border-gray-400"
            style={{ lineHeight: "0px" }}>
            <span
              className="p-2 text-xs font-semibold tracking-wide text-gray-600  bg-white"
              style={{ lineHeight: "0px" }}>
              Or
            </span>
          </div>
          <Button
            onClick={handleGoogleLogin}
            fullWidth
            className="bg-transparent text-black border border-gray-400 shadow-none normal-case flex justify-center items-center gap-2 text-base py-2 my-4">
            <FcGoogle className="text-3xl"></FcGoogle>
            <span>Login With Google</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
