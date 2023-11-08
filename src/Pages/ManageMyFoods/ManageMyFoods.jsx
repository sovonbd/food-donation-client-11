import { useContext } from "react";
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
import { Tooltip } from "@material-tailwind/react";

const columns = [
  {
    header: "Image",
    accessorKey: "foodImg",
    cell: (props) => (
      <img src={props.getValue()} className="w-16 lg:w-24 mx-auto lg:mx-2 py-2"></img>
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

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return (
        await axios
          .get(`http://localhost:5000/products/user?userEmail=${user.email}`)
          .then()
      ).data;
    },
  });
  console.log(products);

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

  const handleUpdate = ()=>{
    axios.patch(``)
  }
  const handleDelete = ()=>{}
  const handleManage = ()=>{}

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
              <td className="border px-2 space-x-4">
                <Tooltip content="Update">
                  <button onClick={handleUpdate}>
                    <GrUpdate></GrUpdate>
                  </button>
                </Tooltip>
                <Tooltip content="Delete">
                  <button onClick={handleDelete}>
                    <RiDeleteBin6Line></RiDeleteBin6Line>
                  </button>
                </Tooltip>

                <Tooltip content="Manage">
                  <button onClick={handleManage}>
                    <GrSettingsOption></GrSettingsOption>
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

export default ManageMyFoods;
