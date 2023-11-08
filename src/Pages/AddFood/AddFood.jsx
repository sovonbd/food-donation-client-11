import { Button, Input, Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.displayName, user.photoURL);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const date = form.date.value;
    const location = form.location.value;
    const foodImg = form.foodImg.value;
    const status = form.status.value;
    const notes = form.notes.value;

    // console.log(foodName, foodQuantity, date, location, foodImg, notes);
    const item = {
      foodName,
      foodQuantity,
      date,
      location,
      foodImg,
      notes,
      userDisplayName: user?.displayName,
      userPhotoURL: user?.photoURL,
      userEmail: user?.email,
      status,
    };
    console.log(item);

    axios.post("http://localhost:5000/addProduct", item).then((res) => {
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Success...",
        text: "Successfully added the food",
        confirmButtonColor: "#4ca048b7",
      });
    });
    form.reset();
  };

  return (
    <div className="">
      <Helmet>
        <title>DNOSH | Add Food</title>
      </Helmet>
      <div
        className="h-[200px] lg:h-[400px] bg-no-repeat lg:bg-bottom bg-cover"
        style={{
          backgroundImage: "url(https://i.imgur.com/RUhRhir.jpg)",
        }}></div>
      <h3 className="text-3xl lg:text-5xl text-center py-10 font-bold">
        Add Food
      </h3>
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-6 px-4 lg:px-20">
        <div className="col-span-2 md:col-span-1">
          <Input
            variant="outlined"
            label="Food Name"
            type="text"
            name="foodName"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            variant="outlined"
            label="Food Quantity"
            type="number"
            name="foodQuantity"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            variant="outlined"
            label="Expired Date"
            type="date"
            name="date"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            variant="outlined"
            label="Pickup Location"
            type="text"
            name="location"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            variant="outlined"
            label="Food Image Url"
            type="text"
            name="foodImg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            variant="outlined"
            label="Status"
            type="text"
            name="status"
            defaultValue={"Available"}
            className="text-green-600"
            disabled
          />
        </div>
        <div className="col-span-2">
          <Textarea
            variant="outlined"
            label="Additional Notes"
            type="text"
            name="notes"
            className="col-span-2"
          />
        </div>
        <Button
          type="submit"
          className="w-full md:w-auto bg-green-600 mx-auto col-span-2">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddFood;
