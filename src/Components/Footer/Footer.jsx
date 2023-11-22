import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="flex justify-center w-full text-white">
        <div className="bg-blue-900 w-1/2 text-center flex flex-col justify-center items-center p-16">
          <h1>CONTACT US</h1>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-blue-950 w-1/2 text-center flex flex-col justify-center items-center  p-16">
          <h1>Follow US</h1>
          <p>Join us on social media</p>
          <div className="flex items-center text-4xl mt-5 gap-5">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center p-5">
        <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
