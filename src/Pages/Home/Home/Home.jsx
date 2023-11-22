import Banner from "../../../Components/Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Hero from "../Hero/Hero";
import OrderOnlin from "../OrderOnlin/OrderOnlin";
import OurMenu from "../OurMenu/OurMenu";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OrderOnlin></OrderOnlin>
      <Banner
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
