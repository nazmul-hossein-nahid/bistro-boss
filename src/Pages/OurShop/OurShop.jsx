import SectionCover from "../../Components/SectionCover/SectionCover";
import bgImg from "../..//assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";

const OurShop = () => {
  const { salad, dessert, pizza, soup, offered, drinks, isLoading } = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <section>
      <div>
        <Helmet>
          <title>Bistro Boss | Our Shop</title>
        </Helmet>
        <SectionCover
          img={bgImg}
          title={"Our Shop"}
          sudTitle={"Would you like to try a dish? "}
        ></SectionCover>
      </div>
      <div className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase">
            <Tab>offered</Tab>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <div className="my-5">
            <TabPanel className="">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {offered?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {salad?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {pizza?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {soup?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {dessert?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {drinks?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default OurShop;
