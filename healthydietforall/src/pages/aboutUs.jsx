// import NavbarSection from "../Navbar";

import aboutbg from "../assets/images/Images/aboutbg.png";
import aboutbg2 from "../assets/images/Images/aboutbg2.png";
import dieticianimg from "../assets/images/Dietician-img.png";

const AboutusPage = () => {
   

  return (
    <>
      {/* <NavbarSection /> */}

      <div className="">
        <div className="relative">
          <div>
            <img className=" w-lvw h-lvh " src={aboutbg} alt="" />
          </div>

          <div className="absolute top-[6rem] right-[2.6rem] flex flex-col gap-8 justify-center items-center">
            <button className="pr-2 text-4xl w-[200px] pt-2 pb-2 bg-white border border-slate-500 rounded-3xl font-extrabold ">
              About <span className="text-primaryOrange">Us</span>
            </button>
            <div className="max-w-[650px] text-left">
              <p className=" text-xl mb-4">
                Healthy diet for all aims at inspiring and empowering people to
                make positive changes to their lifestyle and improve their
                overall well-being.
              </p>
              <p className="text-xl">
                Our mission is to equip individuals with the knowledge and tools
                to make informed dietary choices for their long-term well-being
                and also assist them in bridging the gap between busy lifestyles
                and healthy eating habits.{" "}
              </p>
            </div>

            <button className="bg-primaryOrange  w-52 rounded-2xl ">
              Our Services
            </button>
          </div>
        </div>

        <div>
          <button className="pt-5 mt-9 border border-slate-400 mb-5 bg-slate-100 w-96 font-extrabold text-3xl">
            Know your <span className="text-primaryOrange">Dietician</span>
          </button>

          <div className="border border-primaryGreen m-20 rounded-3xl flex items-center">
            <div className="flex-1">
            <h4 className="bg-white pb-16  pt-10">
              I believe that every person is unique, and so is their
              relationship with food. That's why I offer personalised
               nutrition
              plans{" "}
            </h4>

            <p className="pt-5 pr-20 border w-[800px] border-slate-400 text-lg">
              Pascaline Ukwueze is a registered dietician with over five years
              of experience in the field of dietetics. She earned her B.Sc. in
              nutrition and dietetics from the University of Nigeria, Nsukka,
              and has since worked as a clinical dietician in two hospitals.
              She’s passionate about helping people to stay healthy while living
              their best lives through 
              nutrition education, support, and
              encouragement.
            </p>
            </div>

            <div>
            <img src={dieticianimg} alt="" className="w-[300px]" />
            </div>
          </div>
        </div>

        <div className="relative">
          <img className=" w-lvw h-lvh" src={aboutbg2} alt="" />

          <div className=" top-60 pl-20 absolute">
            <h3 className="mb-8 mt-28 text-4xl font-bold border inline-block border-b-2 border-primaryGreen ">
              Join The Thriving{" "}
              <span className="text-primaryOrange">Community</span>
            </h3>

            <div className="flex mr-32  mb-32">
              <input
                type="text"
                placeholder="Your Email"
                className="mr-8 ml-32 border border-gray-900 w-full pl-4 "
              />
              <button className="bg-primaryOrange text-white w-64 h-12 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;