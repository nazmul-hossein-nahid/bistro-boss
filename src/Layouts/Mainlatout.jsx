import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Mainlatout = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="min-h-[50vh]">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Mainlatout;
