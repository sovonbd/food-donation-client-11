import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading/Loading";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import Marquee from "react-fast-marquee";

const FeaturedFoods = () => {
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

  const sortedProducts = products
    .slice(0, 6)
    .sort((a, b) => b.foodQuantity - a.foodQuantity);

  console.log(sortedProducts);
  return (
    <div className="mt-20 bg-gray-100 py-10">
      <h1 className="pb-10 text-4xl md:text-5xl font-bold text-center">
        <span className="text-green-600">Available</span> Foods
      </h1>
      <Marquee pauseOnHover={true}>
        <div className="grid grid-cols-6 gap-6 px-3 pb-10">
          {sortedProducts.map((product) => (
            <FeaturedFoodsCard
              key={product._id}
              product={product}></FeaturedFoodsCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FeaturedFoods;
