import { Link } from "react-router-dom";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import useMenu from "../../../Hooks/useMenu";
import Category from "../../Menu/Category/Category";

const OurMenu = () => {
  const { popular, isLoading } = useMenu();
  if (isLoading) {
    return "loading....";
  }
  const newMenu = popular?.slice(0, 6);
  return (
    <section className="my-10">
      <Sectiontitle
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></Sectiontitle>
      <Category category={newMenu}></Category>
      <div className="flex justify-center mt-12">
        <Link to="/menu" className="btn btn-outline border-b-4 border-0">
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default OurMenu;
