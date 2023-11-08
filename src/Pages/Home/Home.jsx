import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import DonationMap from "../../components/DonationMap/DonationMap";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DNOSH | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <DonationMap></DonationMap>
      <Review></Review>
    </div>
  );
};

export default Home;
