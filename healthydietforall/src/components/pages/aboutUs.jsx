// import NavbarSection from "../Navbar";
import Aboutbg from '../../assets/images/aboutbg.png';
import Aboutbg2 from '../../assets/images/aboutbg2.png';

const AboutusPage = () => {
    return (
        <>
        {/* <NavbarSection /> */}

        <div className=' '>
            <img src={Aboutbg} alt="Aboutbg" className="  mt-9" />
        <div className='absolute bottom-0 pt-5 pb-9 pl-72 m-72 top-5 leading-2 text-xs '>
        <button className=' mt-7 pb-5 rounded-3xl pt-5 border-x-4 font-extrabold border-r-primaryGreen bg-slate-100 text-2xl'>About <span className='text-primary'>Us</span></button>
         <p className='mb-2 font-sans-serif pt-6'>Healthy diet for all aims at inspiring and empowering people to make <br />
             positive changes to their lifestyle and improve their overall well-being.
             </p>

          <p className='  '>Our mission is to equip individuals with the knowledge and tools to make <br />
          informed dietary choices for their long-term well-being and also assist <br />
          them in bridging the gap between busy lifestyles and healthy eating <br />
          habits.</p> 

         <div>
            <button className='text-white text-center justify-center text-2xl w-52 rounded-3xl mt-5 bg-primaryOrange pt-3'>Our Services</button>
         </div> 
         </div>
        </div>


        <div>
            <button className='font-extrabold pt-8 bg-gray-200 w-80 m-5 text-2xl'>Know Your <span className='text-primaryOrange pt-9'>Dietitian </span></button>
        </div>


        <div className='mt-16'>

            <div>
                <h4>I believe that every person is unique, and so is their relationship with food. That's why I offer personalised nutrition plans </h4>
                <p>Pascaline Ukwueze is a registered dietician with over five years of experience in the field of dietetics. She earned her B.Sc. in nutrition and dietetics from the University of Nigeria, Nsukka, and has since worked as a clinical dietician in two hospitals. She’s passionate about helping people to stay healthy while living their best lives through nutrition education, support, and encouragement.</p>
                <img src="" alt="" />
            </div>
        </div>

        <div className='mt-32'>

        <img src={Aboutbg2} alt="Aboutbg2" className="object-cover  mt-9" />

        <div>
            <button className='absolute w-full bottom-0'>Join The Thrieving <span>Community</span></button>
            <button>Subscribe</button>
        </div>

        




        </div>
        </>
    );
}

export default AboutusPage;