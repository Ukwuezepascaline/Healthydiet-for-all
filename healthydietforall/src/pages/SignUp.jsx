import "../index.css";
import Logo from "../assets/images/logo.png";
import googleicon from "../assets/images/google.png";
import fbicon from "../assets/images/facebook.png";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import { useState } from "react";
import { toast } from "react-toastify";
import { createAccount } from "../services/backend.services";

function SignUp() {
  const [accountDetails, setAccountDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, passwordConfirmation } = accountDetails;
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
    }
    setSubmitting(true);

    await toast.promise(
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const status = await createAccount(fullName, email, password);
        if (status == 201) {
          afterAccountCreationt();
          resolve();
        } else {
          afterAccountCreationt();
          reject();
        }
      }),
      {
        pending: "Creating your account",
        success:
          "Account successfully created 👌\nCheck your email to verify your account",
        error: "Encountered error 🤯",
      }
    );
  };

  const afterAccountCreationt = () => {
    setSubmitting(false);
    setAccountDetails({
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  return (
    <div className=" ">
      <div className=" mt-20 md:mt-0 flex flex-row items-center justify-center  ">
        <div>
          <div className="pt-10">
            <img src={Logo} alt="login icon" className="flex" />
          </div>
          <div className="mt-10 ">
            <form
              className=" items-center justify-center flex-col "
              onSubmit={handleSubmit}
            >
              <div>
                <h2 className="hidden md:flex  text-2xl capitalize ml-5 mb-4 font-poppins font-extrabold">
                  Create your Account
                </h2>

                <InputField
                  label="Full Name"
                  name="fullName"
                  placeholder="Enter full name"
                  inputType="text"
                  required={true}
                  handleChange={handleChange}
                  value={accountDetails.fullName}
                  isPassword={false}
                />

                <InputField
                  label="Email"
                  name="email"
                  placeholder="Enter email address"
                  inputType="email"
                  required={true}
                  handleChange={handleChange}
                  value={accountDetails.email}
                  isPassword={false}
                />

                <InputField
                  label="Password"
                  name="password"
                  placeholder="Password"
                  inputType="password"
                  required={true}
                  handleChange={handleChange}
                  value={accountDetails.password}
                  isPassword={true}
                />
                <InputField
                  label="ComfirmPassword"
                  name="passwordConfirmation"
                  placeholder="Password"
                  inputType="password"
                  required={true}
                  handleChange={handleChange}
                  value={accountDetails.passwordConfirmation}
                  isPassword={true}
                />
              </div>
              <button
                className="Login bg-primaryOrange items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3"
                type="submit"
              >
                {submitting ? "Signing up" : "Sign up"}
              </button>
            </form>
          </div>

          <p className=" text-center mt-3 text-slate-500 md:text-black text-lg  font-medium mb-2">
            Alrealdy have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to={"/"}>Log In</Link>
            </span>{" "}
            <br />
            or <br /> Sign Up with
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

export default SignUp;
