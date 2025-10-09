import { Mail } from "lucide-react";
import React from "react";
import img8 from "../assets/img/img8.png"

const Card2 = () => {
  return (
    <div className="w-96 h-[60vh] shadow-lg rounded-4xl overflow-hidden font-[hel2] -rotate-13 translate-x-16">
      <div className="w-full rounded-4xl h-[40%] ">
        <img className="w-full h-full object-cover object-top rounded-4xl" src={img8} alt="" />
      </div>

      <div className="w-full h-[60%]  p-4 ">
        <div className="flex items-center gap-2 mb-2 ">
          {" "}
          <Mail   stroke='#FD6D6C'/>
          <h1>Be Part of the Inner Circle</h1>
        </div>
        <p className="font-[av] text-sm leading-[1.2] mb-2">
          Get exclusive drops, members only deals & Fresh <br />
          Vibe Content - straight to your inbox
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-2 w-full shadow-md mt-3 h-10 rounded-md  p-2 outline-none border-none text-md font-[av] px-5"
        />
        <div className="flex flex-col gap-2 mt-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-red-500" />I agree to
            receive emails from VYBE
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-red-500" />I accept the
            Terms & Conditions
          </label>
        </div>

        <div className="flex items-center justify-center mt-2">
          {" "}
          <button className="w-[50%] mx-auto   h-10 rounded-3xl bg-[#FD6D6C] mt-2 text-white">
            Join News Letter
          </button>
        </div>
        <p className="text-center text-xs font-[av] mt-2">
          No spam. Just pure Street flavour
        </p>
      </div>
    </div>
  );
};

export default Card2;
