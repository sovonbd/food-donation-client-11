import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import FeaturedFoodsCard from "../../components/FeaturedFoods/FeaturedFoodsCard";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFoods = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return (await axios.get("http://localhost:5000/products").then()).data;
    },
  });
  console.log(products);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div
      data-aos="zoom-out"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-4/5 md:w-10/12 mx-auto pt-20">
      {products.map((product) => (
        <AvailableFoodCard
          key={product._id}
          product={product}></AvailableFoodCard>
      ))}
    </div>
  );
};

export default AvailableFoods;
