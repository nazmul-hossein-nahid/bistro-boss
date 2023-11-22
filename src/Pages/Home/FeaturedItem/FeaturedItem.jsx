import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import "./FeaturedItem.css";
import img from "../../../assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    <section className="featuredBgImg h-[70vh] my-20 relative">
      <div className="bg-black w-full h-full bg-opacity-60"></div>
      <div className="flex justify-center items-center">
        <div className="absolute top-0 py-16 text-white">
          <Sectiontitle
            subheading={"Check it out"}
            heading={"FROM OUR MENU"}
          ></Sectiontitle>
          <div className="flex gap-16 w-10/12 mx-auto mt-10">
            <img className="w-5/12" src={img} alt="" />
            <div>
              <h2 className="text-2xl">March 20, 2023</h2>
              <h1 className="text-2xl">WHERE CAN I GET SOME?</h1>
              <p className="text-">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline border-0 border-b-4 border-white uppercase text-white mt-6">
                Read MOre
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
