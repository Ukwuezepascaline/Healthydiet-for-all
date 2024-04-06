import '../../index.css';
import Logo from '../../assets/images/logo.png';
import googleicon from '../../assets/images/google.png';
import fbicon from '../../assets/images/facebook.png';


function SignUp() {
    return (
      <div className=" ">
        <div className=" mt-20 md:mt-0 flex flex-row items-center justify-center  ">
          <div>
            <div className='pt-10'>
              <img src={Logo} alt="login icon" className="flex" />
            </div>
            <div className="mt-10 ">
              <form className=" items-center justify-center flex ">
                <div>
                  <h2 className="hidden md:flex  text-2xl capitalize ml-5 mb-4 font-poppins font-extrabold">
                  Create your Account
                  </h2>

                  <h2 className="text-left font-semibold  text-lg md:text-[20px] mt-6">
                  Full Name
                  </h2>
                  <input
                    className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
                    type="text"
                    name="name"
                  />

                  <h2 className="text-left font-semibold  text-lg md:text-[20px] mt-6">
                  Email Address
                  </h2>
                  <input
                    className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
                    type="text"
                    name="email"
                  />
                  <h2 className="text-left font-semibold  text-lg md:text-[20px] mt-4">
                    Password
                  </h2>
                  <input
                    className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
                    type="text"
                    name="password"
                  />
                  
                </div>
              </form>
            </div>
            <button className="Login bg-primaryOrange items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3">
              Sign Up
            </button>
            <p className=" text-center mt-3 text-slate-500 md:text-black text-lg  font-medium mb-2">
              Alrealdy have an account?{" "}
              <span className="text-blue-500 cursor-pointer"> Log In</span> <br />
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
  