import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import AvailableFoodCard from "./AvailableFoodCard";
import { Button, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return (await axios.get("http://localhost:5000/products").then()).data;
    },
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  if (isLoading) {
    return <Loading />;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  const handleSortByDate = () => {
    setSortBy("date");
  };

  const getSortedProducts = () => {
    let filtered = products;

    if (search) {
      filtered = products.filter((product) =>
        product.foodName.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered = filtered.filter((product) => product.status !== "Delivered");

    if (sortBy === "date") {
      return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      return filtered;
    }
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>DNOSH | Available Foods</title>
      </Helmet>
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center md:px-16 lg:px-36 mx-auto">
        <form
          onSubmit={handleSearch}
          className="text-center flex gap-0 justify-center">
          <div className="">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search here..."
              className="py-2 md:py-2 lg:py-3 px-2 md:px-4 md:w-52 lg:w-96 mx-auto rounded-l-full border border-green-600 outline-none"
            />
          </div>
          <Button
            type="submit"
            className="bg-green-600 py-0 md:py-2 lg:py-4 border-t-2 md:px-10 border-green-600 rounded-r-full">
            Search
          </Button>
        </form>
        <div className="w-52 mx-auto md:mx-0">
          <Select label="Sort the Foods" onChange={handleSortByDate}>
            <Option className="hidden"></Option>
            <Option value="date">Sort By Expire Date</Option>
          </Select>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-4/5 md:w-10/12 mx-auto pt-10 lg:pt-20">
        {getSortedProducts().map((product) => (
          <AvailableFoodCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
