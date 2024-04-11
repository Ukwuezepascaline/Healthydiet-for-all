/* eslint-disable react/prop-types */
import "../index.css";
import Logo from "../assets/images/logo.png";
// import Profileicon from "../assets/images/profileicon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-400 flex space-x-20 rounded-full border-2 border-gray-100 mb-16 ml-10 mr-10 ">
      <Link to={"/"}>
        <img
          src={Logo}
          className="pl-10 pt-4 pb-4 w-48 h-24"
          alt="healthydiet_logo"
        />
      </Link>

      <div className="flex pt-10 space-x-14 font-semibold">
        {navItems.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </div>
      {/* <img src={Profileicon} className="pl-0 w-16 " alt="profile_icon" /> */}
    </div>
  );
};

export default Navbar;

const navItems = [

  { title: "About Us", link: "/aboutUs" },
  { title: "Our Services", link: "/services" },
  { title: "Blog", link: "/blogs" },
  { title: "Contact", link: "/contactUs" },
  { title: "Sign Up", link: "/signUP" },
  { title: "Create Blog", link: "/create-blog" },
];

const NavItem = ({ item }) => {
  return (
    <Link to={item.link} className={`${item.title === "Home" ? "pl-28" : ""}`}>
      {item.title}
    </Link>
  );
};
