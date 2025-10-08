import React from "react";
import img5 from "../assets/img/img5.png";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
const Footer = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row  font-[av] items-center justify-between gap-4 lg:gap-10 px-4 md:px-8 lg:px-18 text-white"
      style={{
        backgroundImage: `url(${img5})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "20px",
        paddingBottom: "20px",
        minHeight: "auto",
        aspectRatio: "20/9",
        
      }}
    >
      {/* Brand Section */}
      <div className="w-full lg:w-1/2 text-gray-500 px-2 md:px-5 py-4 lg:py-8 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-[vibe]">VYBE</h1>
        <h2 className="text-gray-500 font-[av] text-sm md:text-base lg:text-lg">Streetwear Made for you vibe</h2>
        <div className="flex gap-3 md:gap-6 items-center justify-center lg:justify-start mb-4 lg:mb-18">
          <div className="bg-white rounded-xl p-1 md:p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FD6D6C"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
              id="Twitter-X--Streamline-Bootstrap"
              height="20"
              width="20"
              style={{height: '20px', width: '20px'}}
            >
              <desc>Twitter X Streamline Icon: https://streamlinehq.com</desc>
              <path
                d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          <div className="text-[#FD6D6C] bg-white p-1 rounded-xl"><InstagramIcon height={30} width={30}/></div>
          <div className="text-[#FD6D6C] bg-white p-1 rounded-xl"><YoutubeIcon height={30} width={30}/></div>
          <div className="text-[#FD6D6C] bg-white p-1 rounded-xl"><FacebookIcon height={30} width={30}/></div>
        </div>
        <p className="font-[av] text-xs md:text-sm lg:text-md text-gray-500">© 2025 Vybe. All rights reserved.</p>
      </div>

      {/* Links Sections */}
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 lg:gap-0">
        <div className="w-full md:w-1/3 px-2 md:px-3 lg:px-5 py-4 lg:py-8">
          <h3 className="text-black font-bold text-base md:text-lg mb-3 lg:mb-4">Navigation</h3>
          <ul className="text-gray-600 space-y-1 md:space-y-2 text-sm md:text-base">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">Shop</li>
            <li className="hover:text-gray-800 cursor-pointer">Collections</li>
            <li className="hover:text-gray-800 cursor-pointer">Community</li>
            <li className="hover:text-gray-800 cursor-pointer">Limited Editions</li>
            <li className="hover:text-gray-800 cursor-pointer">About</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-2 md:px-3 lg:px-5 py-4 lg:py-8">
          <h3 className="text-black font-bold text-base md:text-lg mb-3 lg:mb-4">Customer Support</h3>
          <ul className="text-gray-600 space-y-1 md:space-y-2 text-sm md:text-base">
            <li className="hover:text-gray-800 cursor-pointer">FAQs</li>
            <li className="hover:text-gray-800 cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-gray-800 cursor-pointer">Returns & Exchanges</li>
            <li className="hover:text-gray-800 cursor-pointer">Size Guide</li>
            <li className="hover:text-gray-800 cursor-pointer">Track Order</li>
            <li className="hover:text-gray-800 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-800 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-2 md:px-3 lg:px-5 py-4 lg:py-8">
          <h3 className="text-black font-bold text-base md:text-lg mb-3 lg:mb-4">Contact us</h3>
          <ul className="text-gray-600 space-y-1 md:space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="text-pink-500">✉</span>
              <span className="break-all">support@vybe.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-pink-500">📞</span>
              <span>+1 (323) 555-0199</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-pink-500">🎧</span>
              <span>Mon-Fri, 9AM-6PM (PST)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
