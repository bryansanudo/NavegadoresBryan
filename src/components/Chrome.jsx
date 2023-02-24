import React from "react";

import Home from "@/components/Home";
import chrome from "@/assets/browsersImg/chrome.png";
import { FaWikipediaW } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Chrome = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <h1 className="text-4xl lg:text-5xl text-[#fec108] text-center md:mb-20 mb-10">
          CHROME
        </h1>

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          <div className="rounded-lg shadow-lg shadow-[#fec108] group ">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={chrome}
                className="h-[200px] object-cover rounded-t-xl "
              />
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Es un navegador web de código cerrado desarrollado por Google,
                Cuenta con más de 900 millones de usuarios.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                El 2 de septiembre de 2008, salió a la luz la primera versión,
                siendo esta una versión beta.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Finalmente, el 11 de diciembre de 2008, se lanzó una versión
                estable al público en general. Actualmente el navegador está
                disponible para Windows, macOS, Linux, Android y iOS.
              </p>

              <a
                href="https://es.wikipedia.org/wiki/Google_Chrome"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" rounded-full shadow-lg shadow-[#fec108] hover:scale-110 duration-300 px-10 p-3 cursor-pointer my-5 ">
                  <FaWikipediaW size={40} />
                </div>
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#fec108] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              <h1 className="text-2xl  text-[#fec108] text-center  mb-10">
                Ventajas
              </h1>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Es uno de los navegadores más rápidos. Esto se debe en gran
                parte a su motor de renderizado que permite que las páginas web
                se carguen rápidamente.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Está integrado con otros servicios de Google, como Gmail, Google
                Drive, Google Translate, etc. Esto hace que sea más fácil y
                conveniente acceder a estos servicios desde el navegador.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Permite sincronizar las pestañas, marcadores y contraseñas entre
                diferentes dispositivos, lo que permite a los usuarios acceder a
                su contenido y configuración personalizada desde cualquier
                lugar.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Ofrece una amplia gama de extensiones y temas que los usuarios
                pueden descargar para personalizar su experiencia de navegación.
              </p>
            </div>
            <div className="my-10 ">
              <h1 className="text-2xl  text-[#fec108] text-center  mb-10">
                Desventajas
              </h1>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Está controlado por una gran corporación, lo que puede preocupar
                a algunos usuarios que prefieren no confiar en una empresa con
                tanto poder e influencia.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Consume muchos recursos, especialmente si se tienen muchas
                pestañas abiertas al mismo tiempo.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Recopila información sobre los usuarios y su comportamiento en
                línea para personalizar la experiencia de navegación y la
                publicidad.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={useScroll}
          className="items-center justify-center mt-10"
        >
          <AiOutlineArrowUp className="text-[#fec108] " size={40} />
        </button>
      </div>
      <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
        Bryan Sañudo Garcia
      </h1>
    </div>
  );
};

export default Chrome;
