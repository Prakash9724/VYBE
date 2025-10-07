import { ChevronRight, MoveRight, Star, Stars, Tag, Timer } from "lucide-react";
import React from "react";
import img from '../assets/img/img3.png'

const Home = () => {
  return (
    <div className="h-screen w-full  ">
      <div className="w-full flex justify-between  h-[22%] ">
        <div className="flex gap-5 mt-4 ">
          <h1 className="text-7xl font-[helvatica] font-bold text-[#3D3D3D]">
            Own the
          </h1>
          <h1 className="text-9xl font-[vibe]">EDGE</h1>
        </div>

        <div className="flex gap-5 mt-[7rem]">
          <h1 className="text-7xl font-[helvatica] font-bold text-[#3D3D3D]">
            keep the
          </h1>
          <h1 className="text-9xl font-[vibe]">VIBE</h1>
        </div>
      </div>

      <div className="w-full h-[72%]  py-2 ">
        <div className="bg-[#FD6D6C] flex items-center justify-between  h-full w-full rounded-[50px]">
          <div className="leftsidediv w-[30vw] h-full  px-10 py-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-white font-semibold">
                New Araivals
              </h2>

              <h1 className="text-5xl text-nowrap  text-white font-medium">
                Where Art Meets
              </h1>

              <h1 className="text-5xl text-nowrap  text-white font-medium">
                your Style
              </h1>
              <p className="text-white  text-xl font-[av] ">
                Step into the future of <br />
                streetwear today.
              </p>

              <div className="flex  bg-white gap-3 items-center justify-between w-fit pl-7 pr-1  rounded-full py-1 ">
                <h1 className="text-xl text-[#FD6D6C] font-[av] ">New Drop</h1>
                <div className="bg-[#FD6D6C] px-4 py-2 h-full rounded-full">
                  <MoveRight className="text-white font-semibold" />
                </div>
              </div>
            </div>

            <div className="border-b-1 border-gray-200 w-48 h-40 flex mt-10 bg-white/30 overflow-hidden backdrop-blur-2xl rounded-4xl relative ">
              <img
                className="w-12 h-14 object-cover rounded-full absolute top-5 left-4 z-20 "
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="w-12 h-14 object-cover rounded-full absolute top-4 left-14 z-20"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="w-12 h-14 object-cover rounded-full absolute top-3 right-13 z-20"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="w-12 h-14 object-cover rounded-full absolute top-2 right-4 z-20"
                src="https://images.unsplash.com/photo-1754473618488-27a2cefd90b4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <div className=" w-full flex absolute bottom-0 h-1/3  justify-between items-center px-4 ">
                <Star className="text-white" />
                <h1 className="font-[av] text-white leading-5 text-lg ">
                  Rated 5 Stars by <br />
                  The Vybe Tribe
                </h1>
              </div>
            </div>
          </div>

          <div className="rightsidediv z-30  w-[30vw] h-full flex items-center justify-center">
            <img className="w-auto max-h-[100%] object-contain -translate-y-[87px] object-top z-30 scale-125" src={img} alt="" />
            {/* center image aayega idhar  */}
          </div>
          <div className="rightsidediv z-30  w-[24vw] h-full flex flex-col justify-center items-center p-10  ">
            <div className="w-full flex  gap-3 justify-between  p-8 h-[16vh]   ">
              <div className="flex flex-col items-center justify-center text-white">
                <Tag size={30} />
                <h1 className="font-[av] font-semibold tracking-wide text-2xl">
                  Feature <br /> Threds
                </h1>
              </div>
              <div className="flex -translate-y-5  flex-col items-center text-white">
                <Stars size={30} />
                <h1 className="font-[av] font-semibold tracking-wide text-2xl">
                  Unique <br />
                  Designs
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center text-white">
                <Timer size={30} />
                <h1 className="font-[av] font-semibold tracking-wide text-2xl">
                  Limited
                  <br />
                  Drops
                </h1>
              </div>
            </div>

            <div className="h-[75%] flex flex-col text-white items-center justify-center w-[70%] ">
              <h1 className="text-2xl font-[rent] py-2">Featured Product</h1>
              <div className="h-full w-full bg-white overflow-hidden rounded-4xl p-0.5 ">
                <img
                  className="w-full h-[60%] object-cover object-top rounded-[30px]"
                  src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-3">
                  <h1 className="text-2xl font-[rent] text-gray-900 font-light pt-3">Urban Vengurd Tee</h1>
                  <h2 className="text-xl font-[rent] text-gray-700 font-light]">Unmatched Comfort.</h2>
                  <div className="flex  bg-[#FD6D6C] gap-3 items-center justify-between w-fit px-1 pr-3  rounded-full py-1 ">
                    <div className="bg-white px-4 py-2 h-full rounded-full">
                      <MoveRight className="text-[#FD6D6C] font-semibold" />
                    </div>
                    <h1 className="text-xl text-white font-[av] ">$26.72</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
