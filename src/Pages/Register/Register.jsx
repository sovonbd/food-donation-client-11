import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Tooltip,
} from "@material-tailwind/react";

import { FcGoogle } from "react-icons/fc";

import loginAnimation from "../../assets/loginAnimation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // console.log(name, photo, email, password);
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters",
        confirmButtonColor: "#4ca048b7",
      });
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase letter",
        confirmButtonColor: "#4ca048b7",
      });
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one special character",
        confirmButtonColor: "#4ca048b7",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(name, photo).then(() => {
          Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Account created successfully",
            confirmButtonColor: "#4ca048b7",
          });
          navigate("/");
        });
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
      <Helmet>
        <title>DNOSH | Sign Up</title>
      </Helmet>
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
          <Typography
            variant="h3"
            color="white"
            className="text-2xl md:text-3xl">
            Create Account
          </Typography>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardBody className="relative top-10 flex flex-col gap-4">
            <Input type="name" name="name" label="Your Name" size="lg" />
            <Input type="photo" name="photo" label="Photo Url" size="lg" />
            <Input type="email" name="email" label="Email" size="lg" />
            <Tooltip
              placement="top"
              className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
              content={
                <div className="w-full md:w-full">
                  <Typography
                    variant=""
                    color=""
                    className="font-normal text-xs md:text-base opacity-80 text-black marker:text-green-600">
                    <li>Password must be at least 6 characters</li>
                    <li>Password must have one uppercase</li>
                    <li>Password must have one special character</li>
                  </Typography>
                </div>
              }>
              <Input
                type="password"
                name="password"
                label="Password"
                size="lg"
              />
            </Tooltip>
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="relative top-7 pt-0">
            <Button type="submit" variant="" fullWidth className="bg-green-600">
              Sign Up
            </Button>
          </CardFooter>
        </form>
        <div className="px-6">
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="/login"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold text-green-600">
              Login here
            </Typography>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Register;
