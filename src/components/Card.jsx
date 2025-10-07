import { ShoppingBasket, Star } from "lucide-react";
import React, { useState } from "react";

const Card = ({
  name = "Vibe Bloom Crop",
  rating = 4.6,
  price = 36,
  image = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-80 h-96 rounded-3xl  bg-white overflow-hidden hover:scale-110 transition-all duration-300 border-b border-r  border-[#FD6D6C] mb-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-[70%] relative">
        <img
          className="w-full h-full object-cover rounded-b-3xl "
          src={image}
          alt={name}
        />
      </div>
      <div className="w-full h-[30%] font-[av] p-4 flex flex-col justify-between bg-white">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={20} fill="#fbbf24" stroke="#fbbf24" />
            <p className="text-gray-600">{rating}</p>
          </div>
          <div className="flex items-center gap-2  ">
            <ShoppingBasket
              className={`text-[#FD6D6C] ${isHovered ? "block" : "hidden"} `}
            />
            <h1 className="text-xl font-bold text-[#FD6D6C]">${price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
