import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const { carts } = useCarts();

  const currentUserCart = carts?.filter(
    (item) => item?.userinfo?.email == user?.email
  );
  const handlelogOut = () => {
    logOut()
      .then(() => {
        alert("Successfully Log Out");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">CONTACT us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourShop">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addCarts" className="">
          <div className="flex">
            <FaShoppingCart />
            {currentUserCart?.length > 0 && (
              <div className="badge bg-yellow-500 text-white text-xs">
                +{currentUserCart?.length}
              </div>
            )}
          </div>
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="w-full relative">
      <div className="navbar container md:fixed z-10 bg-black bg-opacity-40">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="flex flex-col items-start menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-black rounded-box  w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className=" flex items-center gap-2">
            <img className="w-16" src={logo} alt="" />
            <div className="uppercase">
              <h1 className="text-2xl font-extrabold">BISTRO BOSS</h1>
              <p className="text-lg tracking-[.25em] hover:tracking-normal duration-1000">
                Restaurant
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" mr-5 menu-horizontal space-x-4 flex items-center uppercase font-bold">
            {navLinks}
          </ul>
        </div>
        <div className="">
          {user ? (
            <button onClick={handlelogOut} className="btn btn-sm mr-2">
              Log Out
            </button>
          ) : (
            <Link to="login" className="btn btn-sm mr-2">
              Sing In
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
