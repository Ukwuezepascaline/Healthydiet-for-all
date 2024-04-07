import "../index.css";

function ResetPassword() {
  return (
    <div className=" ">
      <div className=" mt-20 md:mt-0 flex flex-row items-center justify-center  "></div>

      <div className="mt-10 ">
        <form className=" items-center justify-center flex "></form>
      </div>
      <h2 className="hidden md:flex  text-2xl capitalize ml-20 mb-4 font-poppins font-extrabold">
        Create New Password
      </h2>
      <p>Enter a strong new password</p>

      <h2 className="text-left font-semibold ml-20 text-lg md:text-[20px] mt-6">
        Password
      </h2>
      <input
        className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
        type="text"
        name="name"
      />

      <h2 className="text-left font-semibold ml-20 text-lg md:text-[20px] mt-6">
        Confirm Password
      </h2>
      <input
        className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
        type="text"
        name="email"
      />

      <button className="Login bg-primaryOrange items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3">
        change password
      </button>
    </div>
  );
}

export default ResetPassword;
