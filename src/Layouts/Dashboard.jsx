import { FaAd, FaBook, FaCalendar, FaCalendarCheck, FaCartPlus, FaHome, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <section className="flex">
      <div className="bg-yellow-600 h-screen w-3/12 p-10 border-r-8 border-red-900 uppercase ">
        <ul>
          {isAdmin ? (
            <>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaCalendar></FaCalendar> reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  {" "}
                  <FaWallet></FaWallet> payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addCarts" className="flex items-center gap-2 text-lg">
                  {" "}
                  <FaCartPlus></FaCartPlus> my cart
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaAd></FaAd> add review
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaCalendarCheck></FaCalendarCheck> my booking
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaCartPlus></FaCartPlus> add items
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  {" "}
                  <FaUtensils></FaUtensils> manage items
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  {" "}
                  <FaBook></FaBook> Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2 text-lg">
                  <FaUser></FaUser> all users
                </NavLink>
              </li>
            </>
          )}
          <hr className="my-5" />

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/ourshop">Shop</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className=" grow p-5 text-white">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Dashboard;
