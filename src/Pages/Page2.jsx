import React from "react";
import Carousel from "../components/Carousel";
import { MoveRight } from "lucide-react";
import svg from "../assets/img/img4.png";
const Page2 = () => {
  return (
    <div className="flex w-full h-[80vh]  py-16">
      <div className="w-[25%] h-full  p-10">
        <div className="flex pl-8 pb-5 items-center gap-2 font-[av]  font-extralight">
          <h1 className="text-lg text-[#FD6D6C] ">Viwe All </h1> <MoveRight className="text-[#FD6D6C] font-semibold" />
        </div>
        <div className="h-[80%] w-full">
          <div
            className="h-full p-15 w-full bg-center bg-no-repeat text-white text-lg font-[av] font-extralight "
            style={{
              backgroundImage: `url(${svg})`,
              backgroundSize: "110%", // This will make the image 60% of container size
            }}
          >
            <h1>All</h1>
            <li>
              <h1>Graphic Tees</h1>
            </li>
            <li>
              <h1>Hoodies & Sweats</h1>
            </li>
            <li>
              <h1>Outerwear</h1>
            </li>
            <li>
              <h1>Tops</h1>
            </li>
            <li>
              <h1>Bottoms</h1>
            </li>
            <li>
              <h1>Accessories</h1>
            </li>
          </div>
        </div>
      </div>
      <div className="max-w-7xl   px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="relative mx-auto">
            <h1 className="text-5xl font-[helvatica] font-bold text-gray-800 mb-2">
              Latest Drops
            </h1>
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-pink-400 rounded-full transform rotate-1"></div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full overflow-visible">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Page2;
