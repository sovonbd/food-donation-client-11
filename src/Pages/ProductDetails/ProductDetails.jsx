import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Loading from "../../components/Loading/Loading";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import AvailableFoods from "../AvailableFoods/AvailableFoods";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import { AuthContext } from "../../provider/AuthProvider";
import { MdToday } from "react-icons/md";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  // console.log(id);
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      return (await axios.get(`http://localhost:5000/products/${id}`).then())
        .data;
    },
  });
  console.log(product);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const {
    _id,
    foodName,
    foodQuantity,
    date,
    location,
    foodImg,
    notes,
    userDisplayName,
    userPhotoURL,
    userEmail,
  } = product;

  const today = new Date();
  const formattedDate = today.toISOString().substr(0, 10);

  const handleOpen = () => setOpen(!open);

  const handleRequest = (e) => {
    e.preventDefault();

    const donation = e.target.donation.value;
    const notes = e.target.notes.value;

    const items = {
      _id: product._id,
      foodName: product.foodName,
      foodQuantity: product.foodQuantity,
      date: product.date,
      location: product.location,
      foodImg: product.foodImg,
      userDisplayName: product.userDisplayName,
      userPhotoURL: product.userPhotoURL,
      userEmail: product.userEmail,
      requesterEmail: user.email,
      donation,
      notes,
    };
    console.log(items);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 md:px-10 lg:px-0 lg:gap-10">
        <div className="text-center">
          <h3 className="text-5xl font-body py-4 text-left text-green-600">
            {foodName}
          </h3>
          <img src={foodImg} className="w-[460px] mx-auto rounded-md" alt="" />
        </div>
        <div className="lg:w-1/2 lg:mt-8">
          <h3 className="pt-4 font-bold text-green-600 text-lg">Notes:</h3>
          <p className="px-4">
            {notes} {notes}
          </p>
          <div>
            <p className="font-bold text-green-600 text-lg">
              Quantity:{" "}
              <span className="font-normal text-[#1A2E35]">{foodQuantity}</span>
            </p>
            <p className="font-bold text-green-600 text-lg">
              Pick-up Location:{" "}
              <span className="font-normal text-[#1A2E35]">{location}</span>{" "}
            </p>
            <p className="font-bold text-green-600 text-lg">
              Expiry Date:{" "}
              <span className="font-normal text-[#1A2E35]">{date}</span>
            </p>
            <p className="font-bold text-green-600 text-lg">Donated By:</p>
            <div className="flex flex-row items-center gap-2">
              <img
                src={userPhotoURL}
                className="w-16 rounded-full border-gray-400 border-2 p-1"
                alt=""
              />
              <p>{userDisplayName}</p>
            </div>
          </div>
          <Button onClick={handleOpen} className="bg-green-600 w-full mt-4">
            Request the Food
          </Button>
          <Dialog
            open={open}
            handler={handleOpen}
            className="h-[90%] lg:h-max py-10 overflow-scroll">
            <form
              onSubmit={handleRequest}
              className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-x-6 px-4 lg:px-20 ">
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Food Name</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="foodName"
                  defaultValue={foodName}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Food ID</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="_id"
                  defaultValue={_id}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Expired Date</label>
                <Input
                  variant="outlined"
                  type="date"
                  name="date"
                  defaultValue={date}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Pickup Location</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="location"
                  defaultValue={location}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Donator Name</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="location"
                  defaultValue={userDisplayName}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Donator Email</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="userEmail"
                  defaultValue={userEmail}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Requester Email</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="requesterEmail"
                  defaultValue={user.email}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Requested Date</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="requestDate"
                  defaultValue={formattedDate}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Food Image Url</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="foodImg"
                  defaultValue={foodImg}
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs">Donation Amount</label>
                <Input
                  variant="outlined"
                  type="text"
                  name="donation"
                  placeholder="Enter your amount"
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs">Additional Notes</label>
                <Textarea
                  variant="outlined"
                  type="text"
                  name="notes"
                  className="col-span-2"
                  defaultValue={notes}
                />
              </div>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1">
                <span>Cancel</span>
              </Button>
              <Button type="submit" variant="gradient" color="green">
                <span>Confirm</span>
              </Button>
            </form>
          </Dialog>
        </div>
      </div>
      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default ProductDetails;
