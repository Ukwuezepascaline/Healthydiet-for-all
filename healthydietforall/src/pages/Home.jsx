import "../index.css";
import FoodBowl from "../assets/images/foodbowl.png";
import IconOne from "../assets/images/Icon_1.png";
import IconTwo from "../assets/images/Icon_2.png";
import Gif from "../assets/images/Animation.gif";
import Dietician from "../assets/images/pascaline.png";
import Quotes from "../assets/images/quotes.png";

const HomePage = () => {
  return (
    <div className="mt-[-40px]">
      <div className="flex justify-end  bg-gray-100">
        <div>
          <img
            src={FoodBowl}
            style={{ width: "40rem", height: "40rem" }}
            className="pl-4"
            alt="food bowl"
          />
        </div>

        <div id="text" className="text-right pt-16 pr-12 ml-auto">
          <h3 className="text-5xl font-bold leading-12 ">
            Personalized nutrition, <br />
            at your finger tips
          </h3>

          <p className="pt-16 pb-20 text-2xl">
            Whether it&apos;s a virtual <br /> consultation or a menu plan{" "}
            <br />
            designed just for you, our <br /> Registered Dietician is here to{" "}
            <br />
            help you meet your dietary <br /> goals and health needs.
          </p>
          <button className="bg-primaryOrange text-white w-56 h-16 rounded-xl">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-secondaryPink ">
        <h2 className="font-bold text-4xl pt-16 pb-12">How it Works</h2>
        <div className="flex pl-12 ml-auto pb-4 ">
          <div className="bg-primaryGreen rounded-tl-xl rounded-bl-xl text-white text-5xl">
            <p className=" border-8 border-white rounded-full w-24 h-24 ml-12 mr-12 mt-10 px-4 py-4">
              1
            </p>
          </div>
          <div className="bg-white flex gap-72 pl-4 rounded-tr-xl rounded-br-xl">
            <div className="text-left ">
              <h2 className="text-4xl pt-12">
                Tell us a little bit about yourself
              </h2>
              <p className="pt-4">
                {" "}
                Fill a form and tell us about your goals, lifestyle, and values.
              </p>
            </div>
            <img
              className="pr-8 pt-8 pb-8 md:w-36 md:h-44 ml-auto justify-end"
              src={IconOne}
              alt="notes_icon"
            />
          </div>
        </div>

        <div className="flex pl-12 ml-auto pb-4 ">
          <div className="bg-primaryGreen rounded-tl-xl rounded-bl-xl text-white text-5xl">
            <p className=" border-8 border-white rounded-full w-24 h-24 ml-12 mr-12 mt-10 px-4 py-4">
              2
            </p>
          </div>
          <div className="bg-white flex gap-64 pl-4 rounded-tr-xl rounded-br-xl">
            <div className="text-left ">
              <h2 className="text-4xl pt-12">Get Personalized Care</h2>
              <p className="pt-4">
                {" "}
                Our Dietician reviews your info and provides value tailored to
                your needs.
              </p>
            </div>
            <img
              className="pr-8 pt-8 pb-8 md:w-36 md:h-44 ml-auto"
              src={IconTwo}
              alt="notes_icon"
            />
          </div>
        </div>
        <div className="flex pl-12 ml-auto pb-4 ">
          <div className="bg-primaryGreen rounded-tl-xl rounded-bl-xl text-white text-5xl">
            <p className=" border-8 border-white rounded-full w-24 h-24 ml-12 mr-12 mt-10 px-4 py-4">
              3
            </p>
          </div>
          <div className="bg-white flex gap-52 pl-4 rounded-tr-xl rounded-br-xl">
            <div className="text-left ">
              <h2 className="text-4xl pt-12">Make Sustainable Changes</h2>
              <p className="pt-4">
                {" "}
                With our Dietician&apos;s help, learn to adopt healthy habits
                and make lasting changes.
              </p>
            </div>
            <img
              className="pr-8 pt-8 pb-8 md:w-36 md:h-44 ml-auto"
              src={Gif}
              alt="notes_icon"
            />
          </div>
        </div>

        <div className="flex justify-between text-left pt-20 pb-20">
          <p className="text-5xl pl-12 font-bold leading-12">
            {" "}
            Take the first step to <br /> a healthier and happier you!
          </p>

          <button className="bg-primaryOrange text-white w-56 h-16 rounded-xl mr-12">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="text-left w-2/3 pl-12 pt-48">
          <h3 className="text-5xl text-primaryOrange font-normal leading-12 pb-8">
            {" "}
            A Registered Dietician <br /> you can trust{" "}
          </h3>
          <p className="text-xl">
            Meet Pascaline, our experience dietician <br />
            with over five years of expertise in helping <br />
            people meet dietary goals. She offers <br />
            personalized nutrition plans, taking a holistic <br />
            approach to wellness.{" "}
          </p>
          <button className="bg-primaryOrange mt-8 mb-48 text-white w-56 h-16 rounded-xl">
            Learn More
          </button>
        </div>

        <div>
          <img src={Dietician} className="" alt="Our dietician's picture" />
        </div>
      </div>

      <div className="bg-primaryGreen">
        <h2 className="text-white text-5xl pt-24 pb-20">
          Real people, Real results
        </h2>
        <div className="flex gap-3 pl-12 pr-12 pb-16">
          <div className="bg-white rounded-xl">
            <img src={Quotes} alt="quotes icon" className="w-132 pl-1" />
            <h2 className="text-3xl pb-4">
              My health is so much more <br /> improved!
            </h2>
            <p className="pb-8">Oluchi, Lagos</p>
          </div>

          <div className="bg-white rounded-xl">
            <img src={Quotes} alt="quotes icon" className="w-132 pl-1" />
            <h2 className="text-3xl pb-4">
              My health is so much more <br /> improved!
            </h2>
            <p className="pb-8">Oluchi, Lagos</p>
          </div>
        </div>
        <div className="flex justify-between text-left pt-20 pb-20">
          <p className="text-5xl text-white pl-12 font-bold leading-12">
            {" "}
            Start your journey <br /> to a longer, healthier life today!
          </p>

          <button className="bg-primaryOrange text-white w-56 h-16 rounded-xl mr-16">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
