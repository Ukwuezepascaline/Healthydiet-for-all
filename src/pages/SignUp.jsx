import "../index.css";
import Logo from "../assets/images/logo.png";
import googleicon from "../assets/images/google.png";
import fbicon from "../assets/images/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useState } from "react";
import { toast } from "react-toastify";
import { createAccount } from "../services/backend.services";
import { validatePassword } from "../utils";

function SignUp() {
  const [accountDetails, setAccountDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [isStrongPassword, setIsStrongPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    if (name === "password" && value.trim().length >= 8) {
      const { strongPassword, message } = validatePassword(value);
      setIsStrongPassword(strongPassword);
      setMessage(message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, passwordConfirmation } = accountDetails;
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
      return;
    }
    setSubmitting(true);

    const toastId = toast.loading("Creating your account...");

    try {
      const response = await createAccount(fullName, email, password);
      if (response && response.status == 201) {
        toast.update(toastId, {
          render:
            "Account successfully created 👌\nCheck your email to verify your account",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        navigate("/");
        afterAccountCreation();
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
                {!isStrongPassword &&
                  accountDetails.password.trim().length !== 0 && (
                    <p>{message}</p>
                  )}
                <InputField
                  label="Comfirm Password"
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
                disabled={submitting}
              >
                {submitting ? "Signing up" : "Sign up"}
              </button>
            </form>
          </div>

          <p className=" text-center mt-3 text-slate-500 md:text-black text-lg  font-medium mb-2">
            Alrealdy have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to={"/login"}>Log In</Link>
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
