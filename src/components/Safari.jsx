import React from "react";

import Home from "@/components/Home";
import safari from "@/assets/browsersImg/safari.png";
import { FaWikipediaW } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Safari = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <h1 className="text-4xl lg:text-5xl text-[#1da2f7] text-center md:mb-20 mb-10">
          SAFARI
        </h1>

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          <div className="rounded-lg shadow-lg shadow-[#1da2f7] group ">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={safari}
                className="h-[200px] object-cover rounded-t-xl "
              />
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Es un navegador web de código cerrado desarrollado por Apple
                Inc. Está disponible para macOS, iPadOS e iOS, y de 2007 a 2012,
                estaba disponible para Windows.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                La primera versión beta de Safari fue presentada en la
                exposición Macworld el 7 de enero de 2003
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                El 9 de enero de 2007, Steve Jobs anunció que el teléfono
                inteligente de Apple Inc. (iPhone) usaría Safari para la
                exploración de sitios web.
              </p>

              <a
                href="https://es.wikipedia.org/wiki/Safari_(navegador)"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" rounded-full shadow-lg shadow-[#1da2f7] hover:scale-110 duration-300 px-10 p-3 cursor-pointer my-5 ">
                  <FaWikipediaW size={40} />
                </div>
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#1da2f7] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              <h1 className="text-2xl  text-[#1da2f7] text-center  mb-10">
                Ventajas
              </h1>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Está integrado con el sistema operativo de Apple, lo que lo hace
                la opción predeterminada en Mac, iPhone, iPad y otros
                dispositivos de Apple.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Conocido por ser un navegador rápido y eficiente. El motor de
                renderizado de Safari optimiza el rendimiento y reduce el
                consumo de energía.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Ofrece una variedad de funciones de personalización, como la
                capacidad de agregar extensiones y ajustar la apariencia de la
                interfaz de usuario.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Está integrado con iCloud, lo que significa que puede acceder a
                su historial de navegación y pestañas abiertas en todos sus
                dispositivos de Apple.
              </p>
            </div>
            <div className="my-10 ">
              <h1 className="text-2xl  text-[#1da2f7] text-center  mb-10">
                Desventajas
              </h1>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Puede tener problemas para mostrar correctamente algunos sitios
                web, especialmente aquellos que no están diseñados
                específicamente para el navegador.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Disponible en dispositivos de Apple de forma predeterminada, no
                está disponible en otros sistemas operativos, como Windows o
                Linux.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Se queda un poco atrás en términos de innovación y nuevas
                funciones en comparación con otros navegadores, como Chrome o
                Firefox.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={useScroll}
          className="items-center justify-center mt-10"
        >
          <AiOutlineArrowUp className="text-[#1da2f7] " size={40} />
        </button>
      </div>
      <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
        Bryan Sañudo Garcia
      </h1>
    </div>
  );
};

export default Safari;
