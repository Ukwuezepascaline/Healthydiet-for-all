import "../index.css";
import Logo from "../assets/images/logo.png";
import googleicon from "../assets/images/google.png";
import whitelogo from "../assets/images/Images/LogoA.png"
import fbicon from "../assets/images/facebook.png";
import orangeimg from "../assets/images/Images/orangeimg.png"
import halfgreen from "../assets/images/Images/halfgreen.png"
import watermelon from "../assets/images/Images/water-melon.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import { login } from "../services/backend.services";

function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginDetails;
    setSubmitting(true);

    const toastId = toast.loading("Logging in");

    try {
      const { user, accessToken } = await login(email, password);
      if (user && accessToken) {
        afterAccountCreation();
        toast.update(toastId, {
          render: "Logged in successfully 👌",
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
      afterAccountCreation();
    }
  };

  const afterAccountCreation = () => {
    setSubmitting(false);
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  return (
    <div className=" flex justify-center gap-20 ">

      <div className="relative w-2/5 ">
        <img className="absolute pt-24 " src={orangeimg} alt="" />
        <img className="absolute w-full pt-72" src={halfgreen} alt="" />
        <img className="absolute w-96 pt-52 pl-16 justify-center" src={watermelon} alt="" />
        <img className="absolute pt-32 pl-12 w-52" src={whitelogo} alt="" />
      </div>


      <div className=" mt-16 md:mt-0 flex flex-row items-center justify-center bg-white  ">
        
          <div>
          <div className="pt-10 ">
            <img src={Logo} alt="login icon" className="flex" />
          </div>
          <h2 className="hidden md:flex  text-2xl capitalize ml-5 mb-4 font-poppins font-extrabold">
            Welcome Back
          </h2>
          <div className="mt-10 ">
            <form
              className=" items-center justify-center flex-col"
              onSubmit={handleSubmit}
            >
              <InputField
                label="Email"
                name="email"
                placeholder="Enter email address"
                inputType="email"
                required={true}
                handleChange={handleChange}
                value={loginDetails.email}
                isPassword={false}
              />

              <InputField
                label="Password"
                name="password"
                placeholder="Password"
                inputType="password"
                required={true}
                handleChange={handleChange}
                value={loginDetails.password}
                isPassword={true}
              />
              <button
                type="submit"
                className="Login bg-primaryOrange items-center justify-center w-[410px] h-14 flex mx-auto ml-1 rounded-xl text-white font-bold text-xl mt-3"
              >
                {submitting ? "Logging in" : "Login"}
              </button>
            </form>
          </div>

          <h4 className="text-start  text-lg  font-medium cursor-pointer mt-2 text-primary">
            Forgotten password?
          </h4>
          <p className=" text-center mt-3 text-slate-500 md:text-black text-lg  font-medium mb-2">
            Dont have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to={"/signUp"}>Sign Up</Link>
            </span>{" "}
            <br />
            or continue with
          </p>
          <div className="socials flex items-center justify-evenly mb-10 md:justify-center ">
            <img src={googleicon} alt="" className=" px-2 pr-5" />
            <img src={fbicon} alt="" className=" px-2  pr-5" />
          </div>
          <p>By logging in, you are indicating that you have read and agreed to the <br />
         <span className="text-blue-500">Terms of condition</span> and <span className="text-blue-500">Privacy policy.</span></p>
        </div>
      
      </div>
    </div>
  );
}

export default LoginPage;
