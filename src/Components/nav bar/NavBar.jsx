import logo from "../resource/Logo.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-10">
        <img src={logo} alt="" />
        <div className="flex gap-12 text-lg font-normal">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/donation"}>Donation</NavLink>
          <NavLink to={"/statistic"}>Statistics</NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default NavBar;
