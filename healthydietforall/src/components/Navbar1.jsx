/* eslint-disable react/prop-types */
import "../index.css";
import Logo from "../assets/images/logo.png";
// import Profileicon from "../assets/images/profileicon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../context/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/backend.services";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const { setUserData } = userActions;
  const { userData } = useSelector((states) => states.userStates);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      const sUser = JSON.parse(sessionStorage.getItem("user"));
      if (sUser) {
        dispatch(setUserData(sUser));
      }
    }
  }, [dispatch, setUserData, userData]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (currIndex) => {
    setSelectedIndex(currIndex);
  };

  const handleLogout = async () => {
    navigate("/");
    const toastId = toast.loading("Logging out");

    try {
      const status = await logout();
      console.log(status);
      if (status === 200) {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("user");
        dispatch(setUserData(null));

        toast.update(toastId, {
          render: "Logged out successfully 👌",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (e) {
      toast.update(toastId, {
        render: `${e.message} 🤯`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="h-400 flex justify-between rounded-full border-2 border-gray-100 mb-8 px-4">
      <Link to={"/"}>
        <img
          src={Logo}
          className="pt-4 pb-4 w-48 h-24"
          alt="healthydiet_logo"
        />
      </Link>

      <div className="flex gap-[20px] items-center font-semibold">
        {navItems.map((item, index) => (
          <NavItem
            item={item}
            key={index}
            userData={userData}
            index={index}
            handleClick={handleClick}
            selected={`${
              selectedIndex === index ? "bg-slate-200" : "bg-slate-50"
            }`}
          />
        ))}
        <button
          type="button"
          className={`px-2 py-1 rounded-md bg-secondaryPink ${
            userData ? "flex" : "hidden"
          }`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {/* <img src={Profileicon} className="pl-0 w-16 " alt="profile_icon" /> */}
    </div>
  );
};

export default Navbar;

const navItems = [
  { title: "Home", link: "/", access: "user" },
  { title: "About Us", link: "/about-us", access: "user" },
  { title: "Our Services", link: "/services", access: "user" },
  { title: "Blog", link: "/blogs", access: "user" },
  { title: "Contact", link: "/contact-us", access: "user" },
  { title: "Sign Up", link: "/sign-up", access: "user" },
  { title: "Create Blog", link: "/create-blog", access: "admin" },
];

const NavItem = ({ item, userData, index, handleClick, selected }) => {
  const showItem =
    (item.access === "admin" && userData?.userType === "admin") ||
    (item.title === "Sign Up" && userData === null) ||
    (item.title !== "Sign Up" && item.access === "user");

  return (
    <Link
      to={item.link}
      className={`px-2 py-1 rounded-md ${
        showItem ? "flex" : "hidden"
      } ${selected}`}
      onClick={() => handleClick(index)}
    >
      {item.title}
    </Link>
  );
};
