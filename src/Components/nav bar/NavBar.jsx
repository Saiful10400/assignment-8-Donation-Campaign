import logo from "../resource/Logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center py-14">
            <img src={logo} alt="" />
            <div className="flex gap-12 text-lg font-normal">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/donation"}>Donation</NavLink>
                <NavLink to={"/statistic"}>Statistics</NavLink>
            </div>
        </div>
    );
};

export default NavBar;