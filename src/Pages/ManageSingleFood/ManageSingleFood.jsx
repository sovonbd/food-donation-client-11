import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const columns = [
  {
    header: "Requester Image",
    accessorKey: "requesterPhotoURL",
    cell: (props) => (
      <img src={props.getValue()} className="w-16 mx-auto py-2"></img>
    ),
  },
  {
    header: "Requester Name",
    accessorKey: "requesterName",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Requester Email",
    accessorKey: "requesterEmail",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: "Request Date",
    accessorKey: "requestDate",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const ManageSingleFood = () => {
  const { id } = useParams();
  // console.log(id);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      return (await axios.get(`http://localhost:5000/products/${id}`).then())
        .data;
    },
  });
  console.log(products);

  const table = useReactTable({
    data: [products],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleButton = () => {
    axios
      .patch(`http://localhost:5000/products/status/${id}`, {
        status: "Delivered",
      })
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };
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
              <td className="font-bold">Status</td>
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
                <button onClick={handleButton} className="px-2">
                  {products.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSingleFood;
