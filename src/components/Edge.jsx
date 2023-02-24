import React from "react";

import Home from "@/components/Home";
import edge from "@/assets/browsersImg/edge.png";
import { FaWikipediaW } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Edge = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
          EXPLORER
        </h1>

        <div className="grid gap-8 md:px-12 grid-cols-1   md:grid-cols-2">
          <div className="rounded-lg shadow-lg shadow-[#2196f3] group ">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={edge}
                className="h-[200px] object-cover rounded-t-xl "
              />
              <p className="mt-10 capitalize text-sm md:text-lg mx-10 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi fugiat doloremque itaque, ipsum iusto quibusdam
                facere, veniam eaque sint accusantium amet laborum labore hic
                aut, voluptas assumenda sunt minus. Rem? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Excepturi fugiat doloremque
                itaque, ipsum iusto quibusdam facere, veniam eaque sint
                accusantium amet laborum labore hic aut, voluptas assumenda sunt
                minus. Rem?
              </p>

              <div className=" rounded-full shadow-lg shadow-[#2196f3] hover:scale-110 duration-300 px-10 p-3 cursor-pointer my-5 ">
                <FaWikipediaW size={40} />
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#2196f3] flex items-center flex-col justify-center gap-30  ">
            <div className="m-10">
              <h1 className="text-2xl  text-[#2196f3] text-center  mb-10">
                Ventajas
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quidem dicta iure, nostrum enim quam velit vitae accusamus
                fugiat illum eaque rerum non id aspernatur! Nisi eos quos
                impedit sapiente. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero quidem dicta iure, nostrum enim quam
                velit vitae accusamus fugiat illum eaque rerum non id
                aspernatur! Nisi eos quos impedit sapiente.
              </p>
            </div>
            <div className="m-10 ">
              <h1 className="text-2xl  text-[#2196f3] text-center  mb-10">
                Desventajas
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quidem dicta iure, nostrum enim quam velit vitae accusamus
                fugiat illum eaque rerum non id aspernatur! Nisi eos quos
                impedit sapiente. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero quidem dicta iure, nostrum enim quam
                velit vitae accusamus fugiat illum eaque rerum non id
                aspernatur! Nisi eos quos impedit sapiente.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={useScroll}
          className="items-center justify-center mt-10"
        >
          <AiOutlineArrowUp className="text-[#2196f3] " size={40} />
        </button>
      </div>
      <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
        Bryan Sañudo Garcia
      </h1>
    </div>
  );
};

export default Edge;
