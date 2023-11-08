import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";
import { Tooltip } from "@material-tailwind/react";

const columns = [
  {
    header: "Donner Name",
    accessorKey: "userDisplayName",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Pick-Up Location",
    accessorKey: "location",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Expire Date",
    accessorKey: "date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Request Date",
    accessorKey: "requestDate",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Donation Amount",
    accessorKey: "donation",
    cell: (props) => <p>${props.getValue()}</p>,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];
const RequestFood = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myFoodRequest"],
    queryFn: async () => {
      return (
        await axios
          .get(
            `http://localhost:5000/request/user?requesterEmail=${user.email}`
          )
          .then()
      ).data;
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

  const {
    _id,
    foodName,
    foodQuantity,
    date,
    location,
    foodImg,
    notes,
    status,
  } = items;

  const handleDelete = (_id) => {
    const product = products.find((item) => item._id === _id);
    setItems(product);
    axios
      .patch(`http://localhost:5000/products/requesterEmail/${_id}`, {
        requesterEmail: "",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Successfully removed the food",
            confirmButtonColor: "#4ca048b7",
          });
        }
        refetch();
      });
  };

  // console.log(foodName);

  return (
    <div className="py-20 md:flex justify-center overflow-scroll md:overflow-hidden text-sm md:text-base">
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
              <td className="border">
                <Tooltip content="Delete">
                  <button
                    onClick={() => handleDelete(row.original._id)}
                    className="px-7 text-green-600"
                    disabled={row.original.status === "Delivered"}
                    style={{
                      color: row.original.status === "Delivered" ? "gray" : "",
                    }}>
                    <RiDeleteBin6Line />
                  </button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestFood;
