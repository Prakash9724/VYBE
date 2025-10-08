import { Drone, MoveRight, PaintBucket, RocketIcon, Stars } from "lucide-react";
import React from "react";
import { SlSocialDropbox } from "react-icons/sl";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";

const Page4 = () => {
  return (
    <div className="w-full flex items-center p-5 justify-between h-[80vh] my-5 ">
      <div className="w-1/2 h-full  p-10 flex flex-col gap-5 ">
        <h1 className="text-6xl font-[helvatica] font-bold">Our Story</h1>

        <p className="text-lg font-[av] w-[70%]">
          VYBE started as a passion project — a rebellion against mass trends
          and an embrace of raw, unapologetic style. We design for those who own
          their vibe and live it loud.
        </p>
        <div className="flex flex-col gap-6 mt-6 ">
          <h1 className="flex  items-center gap-4 text-gray-500">
            {" "}
            <Stars  fill="#FD6D6C" stroke='transparent'/> <span className="text-gray-700">2022</span> - The Sparks
          </h1>
          <h1 className="flex  items-center gap-4 text-gray-500">
            {" "}
            <SlSocialDropbox fill="#FD6D6C"  stroke='transparent'/> <span className="text-gray-700">2023</span> - The First Drop
          </h1>
          <h1 className="flex  items-center gap-4 text-gray-500">
            {" "}
            <PaintBucket  fill="#FD6D6C" stroke='transparent'/> <span className="text-gray-700">2024</span> - The Culture Collabe
          </h1>
        </div>
        <div className="w-full h-full  flex  justify-end gap-5  ">
          <div className=" my-auto w-[70%] h-[90%] overflow-hidden rounded-3xl bg-red-300 ">
            <img className="w-full h-full object-cover" src={img7} alt="" />
          </div>
          <div className=" py-5 pl-5 w-full h-full ">
            <RocketIcon className="text-[#FD6D6C] mb-4"/>
            <h1>2025 - Going Global</h1>
            <p className="text-lg font-[av] w-[65%]">
              Our official site went live. Now, we're taking VYBE worldwide —
              one bold fit at a time. The movement has just begun.
            </p>

            <div className="w-[50%]    flex items-center pl-6 pr-1 py-1 justify-between bg-[#FD6D6C] rounded-[30px] translate-y-12">
          <h1 className="text-white font-[av] text-lg">Read More</h1>
          <div className="bg-white px-5 py-2 h-full rounded-full">
            <MoveRight className="text-black " />
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-10 h-full ">
        <img
          className="w-[80%]  mx-auto  h-full object-contain"
          src={img6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Page4;
