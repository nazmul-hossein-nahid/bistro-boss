import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Hero from "../Hero/Hero";
import OrderOnlin from "../OrderOnlin/OrderOnlin";
import OurMenu from "../OurMenu/OurMenu";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Hero></Hero>
      <OrderOnlin></OrderOnlin>
      <Banner
        img={
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
        }
        heading={"Bistro Boss"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente libero, assumenda beatae nesciunt illo modi perspiciatis explicabo. Amet explicabo fugiat dicta doloremque commodi libero tenetur, ex voluptatibus nulla sunt."
        }
      ></Banner>
      <OurMenu></OurMenu>
      <FeaturedItem></FeaturedItem>
      <Review></Review>
    </>
  );
};

export default Home;
