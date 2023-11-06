import { Button, Input, Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    };
    console.log(item);

    axios.post("http://localhost:5000/addProduct", item).then((res) => {
      console.log(res.data);
    });
    form.reset();
  };

  return (
    <div className="">
      <div
        className="h-[400px] bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage: "url(https://i.imgur.com/RUhRhir.jpg)",
        }}></div>
      <h3 className="text-5xl text-center py-10 font-bold">Add Food</h3>
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 px-20">
        <Input
          variant="outlined"
          label="Food Name"
          type="text"
          name="foodName"
        />
        <Input
          variant="outlined"
          label="Food Quantity"
          type="number"
          name="foodQuantity"
        />
        <Input
          variant="outlined"
          label="Expired Date"
          type="date"
          name="date"
        />
        <Input
          variant="outlined"
          label="Pickup Location"
          type="text"
          name="location"
        />
        <div className="col-span-2 w-full">
          <Input
            variant="outlined"
            label="Food Image Url"
            type="text"
            name="foodImg"
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
        <Button type="submit" className=" bg-green-600 mx-auto col-span-2">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddFood;
