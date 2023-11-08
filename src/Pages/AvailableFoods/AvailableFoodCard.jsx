import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AvailableFoodCard = ({ product }) => {
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
    <div className="hover:shadow-[#1A2E35] hover:shadow-sm hover:rounded-lg">
      <img
        src={foodImg}
        alt={foodName}
        className="md:h-48 lg:h-72 w-full rounded-t-md"
      />
      <div className="space-y-1 rounded-b-lg px-3 pt-2">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold text-green-600">{foodName}</h3>
          <p className="border rounded-full border-green-600 px-2 py-1 text-sm">
            Qty: {foodQuantity}
          </p>
        </div>
        <p className="text-sm text-justify">
          {notes.split(" ").slice(0, 13).join(" ")} ...
        </p>
        <p>
          <span className="font-bold">Pick-Up:</span> {location}
        </p>
        <p className="">
          <span className="font-bold">Expired in:</span> {date}
        </p>
        <p className="font-bold">Donated By:</p>
        <div className="flex flex-row items-center gap-2">
          <img
            src={userPhotoURL}
            className="w-10 rounded-full border-gray-400 border-2 p-1"
            alt=""
          />
          <p>{userDisplayName}</p>
        </div>
        <div className="py-4 text-center">
          <Link to={`/availableFoods/${_id}`}>
            <Button className="w-full bg-green-600">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AvailableFoodCard.propTypes = {
  product: PropTypes.object,
};
export default AvailableFoodCard;
