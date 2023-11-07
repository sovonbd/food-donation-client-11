import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { Button } from "@material-tailwind/react";
import AvailableFoods from "../AvailableFoods/AvailableFoods";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

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
  } = product;

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
          <Button className="bg-green-600 w-full mt-4">Request the Food</Button>
        </div>
      </div>
      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default ProductDetails;
