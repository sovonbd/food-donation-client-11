import Banner from "../../components/Banner/Banner";
import DonationMap from "../../components/DonationMap/DonationMap";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <DonationMap></DonationMap>
      <Review></Review>
    </div>
  );
};

export default Home;
