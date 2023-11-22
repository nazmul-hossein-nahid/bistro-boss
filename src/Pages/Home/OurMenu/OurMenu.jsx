import { useEffect, useState } from "react";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";

const OurMenu = () => {
  const [allMenus, setAllManus] = useState([]);

  useEffect(() => {
    fetch("../../../../public/menu.json")
      .then((res) => res.json())
      .then((data) => setAllManus(data));
  }, []);
  const newMenu = allMenus?.slice(0, 6);
  return (
    <section className="my-10">
      <Sectiontitle
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></Sectiontitle>

      <div className="grid grid-cols-2 gap-10 mt-12">
        {newMenu?.map((menu) => (
          <div key={menu._id} className="flex gap-3 ">
            <img
              className="w-28 h-28 rounded-b-full  rounded-tr-full shadow-md shadow-black"
              src={menu?.image}
              alt=""
            />
            <div>
              <h1 className="text-2xl uppercase">
                {menu?.name}---------------
              </h1>
              <p className="text-gray-500">{menu?.recipe}</p>
            </div>
            <p className="text-xl text-yellow-700">${menu?.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="btn btn-outline border-b-4 border-0">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default OurMenu;
