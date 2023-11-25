import { useEffect, useState } from "react";

const useMenu = () => {
  const [allMenus, setAllManus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        setAllManus(data);
        setIsLoading(false);
      });
  }, []);
  const salad = allMenus?.filter((item) => item?.category === "salad");
  const drinks = allMenus?.filter((item) => item?.category === "drinks");
  const popular = allMenus?.filter((item) => item?.category === "popular");
  const dessert = allMenus?.filter((item) => item?.category === "dessert");
  const pizza = allMenus?.filter((item) => item?.category === "pizza");
  const soup = allMenus?.filter((item) => item?.category === "soup");
  const offered = allMenus?.filter((item) => item?.category === "offered");

  return {
    allMenus,
    isLoading,
    salad,
    drinks,
    popular,
    dessert,
    pizza,
    soup,
    offered,
  };
};

export default useMenu;
