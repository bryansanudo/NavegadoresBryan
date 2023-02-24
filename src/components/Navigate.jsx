import React from "react";
import { Link } from "react-router-dom";

import chrome from "@/assets/browsersImg/chrome.png";
import edge from "@/assets/browsersImg/edge.png";
import firefox from "@/assets/browsersImg/firefox.png";
import safari from "@/assets/browsersImg/safari.png";

const Navigate = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
        <Link to="/chrome">
          <div className="flex  flex-col w-[260px] md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#2196f3] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center mx-2 ">
              <img
                src={chrome}
                alt="contact us"
                className="rounded-full object-cover w-14 h-14 shadow-lg    "
              />
            </div>
          </div>
        </Link>
        <Link to="/safari">
          <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#2196f3] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center  ">
              <img
                src={safari}
                alt="contact us"
                className="rounded-full object-cover w-14 h-14 shadow-lg    "
              />
            </div>
          </div>
        </Link>
        <Link to="/firefox">
          <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#2196f3] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
            <div className="flex gap-5 items-center justify-center  ">
              <img
                src={firefox}
                alt="contact us"
                className="rounded-full object-cover w-14 h-14 shadow-lg   "
              />
            </div>
          </div>
        </Link>
        <Link to="/edge">
          <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#2196f3] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center  ">
              <img
                src={edge}
                alt="contact us"
                className="rounded-full object-cover w-14 h-14 shadow-lg   "
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
