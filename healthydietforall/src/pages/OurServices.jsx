import "../index.css";

function Services() {
  return (
    <div>
      <div className="bg-primaryGreen mb-5">
        <h1 className="hidden md:flex  text-2xl capitalize ml-20 pl-9 mb-4 font-poppins font-extrabold">
          Our Services
        </h1>
        <p>
          Your source for nutritional wisdom and inspiration. Explore articles
          curated just for you on healthy
          <br /> eating, recipes and more. Join Us on a journey towards better
          health through balanced nutrition. <br />
          Stay Informed, Stay Healthy.
        </p>
      </div>

      <div className="bg-secondaryPink pl-6 pb-5">
        <img src="" alt="" />
        <h1 className="hidden md:flex  text-2xl capitalize ml-5 mb-4 font-poppins font-extrabold">
          Virtual <br /> Consultation
        </h1>
        <p>
          Discover the convenience of virtual <br />
          consultations with our expert dietitian. Get <br />
          personalized nutrition advice, meal plans, and <br />
          lifestyle recommendations from the comfort of <br />
          your home.
        </p>

        <h5 className="mt-8">View Plan</h5>
      </div>

      <div className="bg-secondaryPink mt-5">
        <img src="" alt="" />

        <h1 className="hidden md:flex  text-2xl capitalize ml-5 mb-4 font-poppins font-extrabold">
          Curated <br />
          Menu Plan
        </h1>
        <p>
          Unlock the power of personalized nutrition with <br />
          a menu plan crafted by our Dietitian. Tailored to <br />
          your unique dietary needs and preferences, our <br />
          plans are designed to help you achieve your <br />
          health and wellness goals.
        </p>
      </div>
    </div>
  );
}
export default Services;
