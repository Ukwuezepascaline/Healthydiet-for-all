import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-secondaryPink relative z-10">
      <div className="grid grid-cols-4 pt-12 pl-12 pr-8">
        <img src={Logo} className="w-sm col-span-2" alt="healthydiet_logo" />

        <div id="contact_and_others" className="grid col-span-2 text-left">
          <div id="firstlist" className="col-start-3 col-end-4 pr-24 ">
            <ul className="text-xl font-bold space-y-4">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div id="secondlist" className="col-start-4 col-end-5 ">
            <ul className="font-bold space-y-5">
              <li className="text-xl font-bold">Contact</li>
              <li>(+234) 81 674 007 61</li>
              <li>ezikepascaline@gmail.com</li>
              <li className="text-xl font-bold ">Join Our Community</li>
              <li>Facebook</li>
              <li>WhatsApp</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="footer">
        <ul className="text-left flex gap-4 mt-12 pl-12 pb-6">
          <li>Healthy Diet For All.</li>
          <li>All Rights Reserved.</li>
          <li className="pl-12">Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
