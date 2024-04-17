// import NavbarSection from "../Navbar";

const ContactPage = () => {
    return (
        <>
        {/* <NavbarSection /> */}
        <div className="border border-slate-200 rounded-1xl pt-10 pb-10 w-[1160px]" >

        <button className="pr-2 text-3xl w-[300px] pt-16 pb-9 bg-white border border-white rounded-3xl font-extrabold ">
             Get In Touch
            </button>
       
        <p className="font-semibold pb-4 ">We are here for you, feel free to reach out</p>

        <form className="mb-4 w-full flex flex-col gap-2  items-center">

        <div className=" bg-white gap-2 w-[460px]">
        
        <input
          required
          className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
          name={"title"}
          placeholder="Name"
          />

          </div>



        <div className="flex flex-col pb-5 bg-white pt-5 gap-1 w-[460px]">
        
        <input
          required
          className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
          name={"title"}
          placeholder="Email"
          />

          </div> 

          <div className="flex flex-col pb-5 bg-white gap-1 w-[460px]">
        
        <input
          required
          className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
          name={"title"}
          placeholder="Phone"
          />

          </div>
          

        <div className="flex flex-col pb-10 gap- bg-white w-[460px]">
       
        <textarea
          name="overview"
          rows={7}
          cols={1}
          className="border rounded-xl md:rounded-md border-slate-600 md:text-black text-xl pl-3"
          placeholder="How can we help you?"
          
        />
      </div> 

      <button className="text-white bg-primaryOrange w-52 pb-3 pt-3">Submit</button>
      
         
          </form>
          </div>

        </>
    );
}

export default ContactPage;