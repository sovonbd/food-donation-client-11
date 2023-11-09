import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrSettingsOption } from "react-icons/gr";
import {
  Button,
  Dialog,
  Input,
  Textarea,
  Tooltip,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const columns = [
  {
    header: "Image",
    accessorKey: "foodImg",
    cell: (props) => (
      <img
        src={props.getValue()}
        className="w-16 lg:w-24 mx-auto lg:mx-2 py-2"></img>
    ),
  },
  {
    header: "Food Name",
    accessorKey: "foodName",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Quantity",
    accessorKey: "foodQuantity",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Expire Date",
    accessorKey: "date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Pick-up Location",
    accessorKey: "location",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  // const url = `https://food-donation-server-puce.vercel.app/products/user?userEmail=${user.email}`;
  const url = `/products/user?userEmail=${user.email}`;

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return (await axiosSecure.get(url).then()).data;
    },
  });
  // console.log(products);

  const table = useReactTable({
    data: products,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(table.getHeaderGroups());
  // console.log(table.getRowModel());

  // const product = products.map((product) => product._id);
  // console.log(product);
  const { _id, foodName, foodQuantity, date, location, foodImg, notes } = items;
  const handleOpen = (_id) => {
    // console.log("clicked", _id);
    const product = products.find((item) => item._id === _id);
    // console.log(product.foodName);
    setItems(product);
    setOpen(!open);
  };
  // console.log(foodName);

  const handleUpdate = (e) => {
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
    };
    // console.log(item);
    axios
      .patch(
        `https://food-donation-server-puce.vercel.app/products/${_id}`,
        item
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Successfully sent the request",
            confirmButtonColor: "#4ca048b7",
          });
        }
        setOpen(!open);
        refetch();
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4ca048",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://food-donation-server-puce.vercel.app/products/${_id}`
          )
          .then((res) => {
            if (res.data.deleteCount > 0) {
              Swal.fire("Deleted!", `${foodName} has been deleted.`, "success");
            }
          });
        refetch();
      }
    });
  };

  if (!products || products.length === 0) {
    return (
      <div className="text-center flex items-center justify-center my-16 h-[40vh]">
        <p>No donation found.</p>
      </div>
    );
  }

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="py-20 md:flex justify-center overflow-scroll md:overflow-hidden text-sm md:text-base">
      <Helmet>
        <title>DNOSH | Manage My Foods</title>
      </Helmet>
      <table className="text-center border " width={table.getTotalSize()}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="md:px-5 border-2 font-bold py-2">
                  {header.column.columnDef.header}
                </th>
              ))}
              <th>Action</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="border px-2 space-x-4">
                <Tooltip content="Update">
                  <button onClick={() => handleOpen(row.original._id)}>
                    <GrUpdate></GrUpdate>
                  </button>
                </Tooltip>
                <Tooltip content="Delete">
                  <button onClick={() => handleDelete(row.original._id)}>
                    <RiDeleteBin6Line></RiDeleteBin6Line>
                  </button>
                </Tooltip>

                <Tooltip content="Manage">
                  <Link to={`/manageMyFoods/${row.original._id}`}>
                    <button>
                      <GrSettingsOption></GrSettingsOption>
                    </button>
                  </Link>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog
        open={open}
        handler={() => handleOpen(_id)}
        className="h-[90%] lg:h-max py-10 overflow-scroll">
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-x-6 px-4 lg:px-20 ">
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">Food Name</label>
            <Input
              variant="outlined"
              type="text"
              name="foodName"
              defaultValue={foodName}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">Food Quantity</label>
            <Input
              variant="outlined"
              labelProps={{
                className: "hidden",
              }}
              className="!border !border-gray-300 bg-white  ring-4 ring-transparent placeholder:text-gray-500 "
              label="Food Quantity"
              type="number"
              name="foodQuantity"
              defaultValue={foodQuantity}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">Expired Date</label>
            <Input
              variant="outlined"
              type="date"
              name="date"
              defaultValue={date}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">Pickup Location</label>
            <Input
              variant="outlined"
              type="text"
              name="location"
              defaultValue={location}
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs">Food Image Url</label>
            <Input
              variant="outlined"
              type="text"
              name="foodImg"
              defaultValue={foodImg}
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
            onClick={() => handleOpen(_id)}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button type="submit" variant="gradient" color="green">
            <span>Confirm</span>
          </Button>
        </form>
      </Dialog>
    </div>
  );
};

export default ManageMyFoods;
