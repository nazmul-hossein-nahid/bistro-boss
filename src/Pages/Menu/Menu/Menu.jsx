import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Components/SectionCover/SectionCover";
import useMenu from "../../../Hooks/useMenu";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import Banner from "../../../Components/Banner/Banner";

import menuBgImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const { salad, dessert, pizza, soup, offered, isLoading } = useMenu() || [];

  const Top6Offered = offered?.slice(0, 4);
  const Top6dessert = dessert?.slice(0, 6);
  const Top9pizza = pizza?.slice(0, 9);
  const Top8Salad = salad?.slice(0, 8);
  const Top6soup = soup?.slice(0, 6);
  return (
    <section>
      {/* Section Cover */}
      <div>
        <Helmet>
          <title>Bistro Boss | Our Menu</title>
        </Helmet>
        {/* section Banner */}
        <SectionCover
          img={menuBgImg}
          title={"OUr Menu"}
          sudTitle={"Would you like to try a dish?"}
        ></SectionCover>
      </div>

      {/* Today Offer */}
      <div className="my-16">
        <Sectiontitle
          subheading={"Don't miss"}
          heading={"TODAY'S OFFER"}
        ></Sectiontitle>
        <Category category={Top6Offered}></Category>
        <div className="flex justify-center mt-12">
          <Link to={`/ourshop`} className="btn btn-outline border-b-4 border-0">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>

      {/* DESSERTS */}
      <div className="my-16">
        <Banner
          img={dessertImg}
          heading={"DESSERTS"}
          title={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Banner>
        <Category category={Top6dessert}></Category>
        <div className="flex justify-center mt-12">
          <Link to={`/ourshop`} className="btn btn-outline border-b-4 border-0">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>

      {/* pizza */}
      <div className="my-16">
        <Banner
          img={pizzaImg}
          heading={"pizza"}
          title={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Banner>
        <Category category={Top9pizza}></Category>
        <div className="flex justify-center mt-12">
          <Link to={`/ourshop`} className="btn btn-outline border-b-4 border-0">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>

      {/* salad */}
      <div className="my-16">
        <Banner
          img={saladImg}
          heading={"salad"}
          title={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Banner>
        <Category category={Top8Salad}></Category>
        <div className="flex justify-center mt-12">
          <Link to={`/ourshop`} className="btn btn-outline border-b-4 border-0">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>

      {/* soup */}
      <div className="my-16">
        <Banner
          img={soupImg}
          heading={"soup"}
          title={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Banner>
        <Category category={Top6soup}></Category>
        <div className="flex justify-center mt-12">
          <Link to={`/ourshop`} className="btn btn-outline border-b-4 border-0">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
