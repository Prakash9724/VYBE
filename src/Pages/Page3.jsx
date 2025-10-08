import { MoveRight } from "lucide-react";
import React from "react";

const Page3 = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-3 bg-[#313236] p-10 rounded-[70px]">
      {/* first section left side   */}
      <div className="p-4 ">
        <div className="h-[40%] p-1 mb-5 w-full bg-white relative rounded-[30px] overflow-hidden">
          <div className="w-full h-[80%] relative rounded-[30px]">
            {/* Main image container */}
            <div
              className="absolute inset-0 w-full h-full  rounded-[30px] overflow-hidden"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <h1
            className="text-9xl -translate-y-[60%] font-bold text-center text-transparent bg-clip-text uppercase"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: "cover",
              backgroundPosition: "center 87%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "3px white",
            }}
          >
            Silent{" "}
          </h1>
        </div>

        {/* second div  */}

        <div className="bg-white h-[60%] flex justify-between w-full p-1 rounded-[30px] mt-2">
          <h1 className=" h-fit text-3xl text-gray-500 mt-3 translate-x-20  ">
            Frosted
          </h1>

          <h1
            className="flex flex-col items-center text-9xl font-bold translate-x-[58%]  justify-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: "cover",
              backgroundPosition: "5% 85%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "3px white",
            }}
          >
            <span className="block leading-[0.9]">E</span>
            <span className="block leading-[0.9]">D</span>
            <span className="block leading-[0.9]">G</span>
            <span className="block leading-[0.9]">E</span>
          </h1>
          <div className="w-[60%] h-full bg-red-900 rounded-[30px]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* second section middle side   */}
      <div className=" w-full h-full p-5  relative">
        <div className=" w-full h-[16%] text-white">
          <h1 className="text-5xl text-center pt-5 italic  font-[hel2]">
            Shop the Vibe
          </h1>
          <p className="text-center text-gray-500 w-[80%] mx-auto font-[hel2]">
            Discover collection Crafted to express every facet of your unique
            style.
          </p>
        </div>

        <div className="w-full bg-white h-[70%] p-1 rounded-[30px] overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-[30px] object-top"
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01k6z8tsj2f3zt92r8fmd6y1wk%2F1759838655_img_0.webp?st=2025-10-07T10%3A44%3A56Z&se=2025-10-13T11%3A44%3A56Z&sks=b&skt=2025-10-07T10%3A44%3A56Z&ske=2025-10-13T11%3A44%3A56Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=2905dc6d-d44b-4668-b712-e8787ddb94c0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6zJgZFZU%2BqbZXQv2ORCw2zxlnhpAnncBfhe%2FcEmkkq0%3D&az=oaivgprodscus"
            alt=""
          />
        </div>

        <h1
          className="text-8xl font-[hel2]  font-bold text-center absolute -translate-y-[55%] translate-x-[10%] text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'url("https://videos.openai.com/vg-assets/assets%2Ftask_01k6z8tsj2f3zt92r8fmd6y1wk%2F1759838655_img_0.webp?st=2025-10-07T10%3A44%3A56Z&se=2025-10-13T11%3A44%3A56Z&sks=b&skt=2025-10-07T10%3A44%3A56Z&ske=2025-10-13T11%3A44%3A56Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=2905dc6d-d44b-4668-b712-e8787ddb94c0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6zJgZFZU%2BqbZXQv2ORCw2zxlnhpAnncBfhe%2FcEmkkq0%3D&az=oaivgprodscus")',
            backgroundSize: "cover",
            backgroundPosition: "  right 75%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "3px white",
          }}
        >
          CANVAS
        </h1>

        <div className="w-[60%] absolute bottom-18 left-1/2 -translate-x-1/2   flex items-center pl-6 pr-1 py-1 justify-between  mx-auto bg-[#FD6D6C] rounded-[30px] translate-y-12">
          <h1 className="text-white font-[av] text-lg">View All Collections</h1>
          <div className="bg-white px-5 py-2 h-full rounded-full">
            <MoveRight className="text-black " />
          </div>
        </div>
      </div>

      {/* third section right side  */}
      <div className=" w-full h-full px-5 py-5 rounded-[30px]">
        <div className="bg-white h-[58%] mb-12 flex justify-between w-full p-1 rounded-[30px]">
          <div className="w-[70%] h-full rounded-[30px]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01k6zf4nrceyvb6a5j43mp4q99%2F1759845312_img_0.webp?st=2025-10-07T12%3A35%3A10Z&se=2025-10-13T13%3A35%3A10Z&sks=b&skt=2025-10-07T12%3A35%3A10Z&ske=2025-10-13T13%3A35%3A10Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=2905dc6d-d44b-4668-b712-e8787ddb94c0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TZTSpLH%2BDcR%2BfmizpKp16r4ZEal0dg9DcRwczhBpapY%3D&az=oaivgprodscus"
              alt=""
            />
          </div>

          <h1
            className="flex flex-col items-center text-9xl  font-bold tracking-tighter -translate-x-[50%]   justify-center"
            style={{
              backgroundImage:
                'url("https://videos.openai.com/vg-assets/assets%2Ftask_01k6zf4nrceyvb6a5j43mp4q99%2F1759845312_img_0.webp?st=2025-10-07T12%3A35%3A10Z&se=2025-10-13T13%3A35%3A10Z&sks=b&skt=2025-10-07T12%3A35%3A10Z&ske=2025-10-13T13%3A35%3A10Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=2905dc6d-d44b-4668-b712-e8787ddb94c0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TZTSpLH%2BDcR%2BfmizpKp16r4ZEal0dg9DcRwczhBpapY%3D&az=oaivgprodscus")',
              backgroundSize: "cover",
              backgroundPosition: "5% 85%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "3px white",
            }}
          >
            <span className="block leading-[0.9] ">N</span>
            <span className="block leading-[0.9] ">E</span>
            <span className="block leading-[0.9]">O</span>
            <span className="block leading-[0.9]">N</span>
          </h1>

          <h1 className=" h-fit text-3xl text-gray-500 mt-3  -translate-x-18 translate-y-[38.5rem] ">
            Frosted
          </h1>
        </div>




        <div className="h-[35%] p-1 flex flex-col justify-between items-center w-full bg-white rounded-[30px] overflow-hidden">
          <h1 className="text-center text-4xl font-[hel2] pt-4 text-gray-500">MUTED</h1>
          <h1
            className="text-center text-8xl font-[hel2]  text-transparent bg-clip-text   translate-y-[50%]"
            style={{
              backgroundImage:
                'url("https://videos.openai.com/vg-assets/assets%2Ftask_01k6ze9mg9f9qacsnfy245yezz%2F1759844373_img_0.webp?st=2025-10-07T12%3A35%3A10Z&se=2025-10-13T13%3A35%3A10Z&sks=b&skt=2025-10-07T12%3A35%3A10Z&ske=2025-10-13T13%3A35%3A10Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=2905dc6d-d44b-4668-b712-e8787ddb94c0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Tyq2ZuE6Kh0RfQwieLZ109Bl%2BE88oaeEx3nBMBjB5ic%3D&az=oaivgprodscus")',
              backgroundSize: "cover",
              backgroundPosition: "center 2%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "3px white",
            }}
          >
            ENERGY
          </h1>
          <div className="w-full h-[80%] flex items-end overflow-y-hidden ">
            <img
              className="w-full h-full object-cover rounded-[30px] object-top "
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01k6ze9mg9f9qacsnfy245yezz%2F1759844373_img_0.webp?st=2025-10-07T12%3A35%3A10Z&se=2025-10-13T13%3A35%3A10Z&sks=b&skt=2025-10-07T12%3A35%3A10Z&ske=2025-10-13T13%3A35%3A10Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=2905dc6d-d44b-4668-b712-e8787ddb94c0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Tyq2ZuE6Kh0RfQwieLZ109Bl%2BE88oaeEx3nBMBjB5ic%3D&az=oaivgprodscus"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page3;
