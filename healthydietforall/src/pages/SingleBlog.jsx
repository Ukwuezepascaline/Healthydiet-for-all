import "../index.css";
import MealPlan from "../assets/images/meal_plan.png";

const SingleBlogPage = () => {
  
    return (
        <div>

        <nav>
        <ul className="bg-secondaryPink flex justify-center pt-10 space-x-16 font-semibold pb-8 ml-36 mr-36 rounded-lg ">
          <li> All</li>
          <li>Weightloss Tips</li>
          <li>Healthy Eating</li>
          <li  className="bg-primaryOrange text-white w-36 h-8"
            style={{ paddingTop: "5px", marginTop: "0px", borderRadius: "15%" }}
          >Meal Planning</li>
          <li>Exercise Tips</li>
        </ul>
      </nav>

      <h3 className="bg-primaryOrange mt-8 mb-8 text-white text-4xl">Why You Should Choose A Healthy Meal Plan</h3>

      <div className="flex gap-6">
  <img src={MealPlan} className="ml-4 w-2/3" alt="" />
  <div className="flex flex-col justify-center"> 
    <h3 className="text-left font-bold text-xl mb-4">Don't Miss Out On The Latest Post <br /> <span className="text-primaryOrange">Subscribe Now</span></h3>
    <input type="text" placeholder="Your Email" className="w-full pl-4 h-16 border" />
    <button className="bg-primaryOrange text-white w-32 h-10 mt-4 self-start"> {/* Add self-start class to align the button to the start */}
      Subscribe
    </button>
  </div>
</div>

<p className="text-left ml-4 mt-2 mb-8">By Mia Bankole</p>

<div className="text-left ml-4 text-2xl">
    <p>A healthy eating plan gives your body the nutrients it needs every day while staying within your daily calorie goal  <br />for weight loss. A healthy eating plan will also lower your risk of heart disease and other health conditions.</p>
    <p className="mt-4 mb-4">A healthy eating plan:</p>
    <ul className="flex flex-col space-y-8 list-disc pl-8">
        <li>Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products</li>
        <li>Includes lean meats, poultry, fish, beans, eggs, and nuts.</li>
        <li>Limits saturated and trans fats, sodium, and added sugars.</li>
        <li>Controls portion sizes.</li>
    </ul>
    <p className="mt-4 mb-8">Begining with a healthy meal plan is teh sure way to go while starting your fitness journey and you definitely don't <br />have to do it alone.</p>

    <button className="bg-primaryOrange text-white w-72 h-12 rounded-xl mr-12">
            Book A Consultation
          </button>
</div>

        </div>

    )
}

export default SingleBlogPage