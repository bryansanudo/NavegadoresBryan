import React from "react";

import Navigate from "@/components/Navigate";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <div className="my-10 mx-8 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
          Todos buscamos en
          <span className="text-[#4285f4]"> G</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">g</span>
          <span className="text-[#34a853]">l</span>
          <span className="text-[#ea4335]">e </span>
          Pero ¿ Qué navegador usamos ?
        </h1>

        <Navigate />
      </div>
    </div>
  );
};

export default Home;
