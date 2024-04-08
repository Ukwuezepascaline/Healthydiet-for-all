import "../index.css";
import Logo from "../assets/images/logo.png";
import googleicon from "../assets/images/google.png";
import fbicon from "../assets/images/facebook.png";
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

    await toast.promise(
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const { user, accessToken } = await login(email, password);
        if (user && accessToken) {
          afterAccountCreationt();
          resolve();
        } else {
          afterAccountCreationt();
          reject();
        }
      }),
      {
        pending: "Logging in",
        success:
          "Account successfully created 👌\nCheck your email to verify your account",
        error: "Encountered error 🤯",
      }
    );
  };

  const afterAccountCreationt = () => {
    setSubmitting(false);
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  return (
    <div className=" ">
      <div className=" mt-20 md:mt-0 flex flex-row items-center justify-center  ">
        <div>
          <div className="pt-10">
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
                className="Login bg-primaryOrange items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3"
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
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
