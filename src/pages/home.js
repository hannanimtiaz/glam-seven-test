import Banner from "../components/Banner";
import Bestseller from "../components/Bestseller";
import Featured from "../components/Featured";
import OfferBanner from "../components/OfferBanner";
import Guarantee from "../components/Guarantee";
import FieldWithAction from "../components/FieldWithAction";

const Home = () => (
  <div className="">
    <OfferBanner />
    <Bestseller />
    <Banner />
    <Guarantee />
    <Featured />"
    <FieldWithAction
      placeholder={"Search Query"}
      buttonText={"Search"}
      buttonAction={() => {
        alert("Yous earched an item");
      }}
    />
  </div>
);

export default Home;
