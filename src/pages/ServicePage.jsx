import "../index.css";

function ServicePage() {
  return (
    <section className="flex justify-center space-x4 gap-5 bg-secondaryPink pt-20 pb-16">
      <div className="bg-white p-10 rounded-2xl  ">
        <h1 className="text-2xl text-extrabold pb-3">Weekly</h1>
        <p className="pb-10">Access to a Dietitian for 1 week</p>
        <p className="text-extrabold text-2xl pb-4 font-poppins capitalize">
          NGN 5,000{" "}
        </p>
        <span>per week</span>
        <p className="text-bold">What’s included</p>
        <p className="pb-7">
          3 virtual meetings or phone calls <br />
          Unlimited access to a Dietitian via <br />
          email Nutrition assessment, counselling <br /> and management{" "}
        </p>

        <button className="bg-primaryOrange rounded-2xl text-bold  pl-7 pr-8 pt-3 pb-3">
          Select Plan
        </button>
      </div>

      <div className="bg-white rounded-2xl p-10">
        <h1 className="text-2xl text-extrabold pb-3">Monthly</h1>
        <p className="pb-10">Access to a Dietitian for 1 month</p>
        <p className="text-extrabold text-2xl pb-4 font-poppins capitalize">
          NGN 10,000{" "}
        </p>
        <span>per week</span>
        <p className="text-bold text-xl">What’s included</p>
        <p className="pb-7">
          12 virtual meetings or phone calls <br />
          Unlimited access to a Dietitian via email <br />
          Nutrition assessment, counselling <br />
          and management Support and follow-up from a <br /> Dietitian Access to
          a private community of <br />
          subscribers for support and <br />
          accountability
        </p>

        <button className="bg-primaryOrange rounded-2xl text-bold  pl-7 pr-8 pt-3 pb-3">
          Select Plan
        </button>
      </div>

      <div className="bg-white rounded-2xl pt-9">
        <h1 className="text-2xl text-extrabold pb-3">Annually</h1>
        <p className="pb-10">Access to a Dietitian for 12 months</p>
        <p className="text-extrabold text-2xl pb-4 font-poppins capitalize">
          NGN 60,000 <span className="">per week</span>
        </p>
        <p className="text-bold">What’s included</p>
        <p className="pb-7">
          12 virtual meetings or phone calls <br />
          <p>
            Unlimited access to a Dietitian via email <br />
          </p>
          <p>
            {" "}
            Nutrition assessment, counselling <br />
            and management{" "}
          </p>
          <p>
            {" "}
            Support and follow-up from a <br /> Dietitian{" "}
          </p>
          <p>
            Access to a private community of <br />{" "}
          </p>
          <p>
            subscribers for support and <br />{" "}
          </p>
          accountability Webinar series on healthy food choices and lifestyle{" "}
          <br />
          Online classes that focus on nutrition for families
        </p>

        <button className="bg-primaryOrange rounded-2xl text-bold  pl-8 pr-8 pt-3 pb-3">
          Select Plan
        </button>
      </div>
    </section>
  );
}

export default ServicePage;
