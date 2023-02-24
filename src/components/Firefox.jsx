import React from "react";

import Home from "@/components/Home";
import firefox from "@/assets/browsersImg/firefox.png";
import { FaWikipediaW } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Firefox = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <h1 className="text-4xl lg:text-5xl text-[#ec8840] text-center md:mb-20 mb-10">
          FIREFOX
        </h1>

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          <div className="rounded-lg shadow-lg shadow-[#ec8840] group ">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={firefox}
                className="h-[200px] object-cover rounded-t-xl "
              />
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Es un navegador web libre y de código abierto desarrollado para
                distintas plataformas, está coordinado por la Corporación
                Mozilla y la Fundación Mozilla.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Usa el motor Gecko para renderizar páginas web, el cual
                implementa actuales y futuros estándares web.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                El 3 de abril de 2003, la Organización Mozilla anuncia que
                centraría sus esfuerzos en Firefox.
              </p>

              <a
                href="https://es.wikipedia.org/wiki/Mozilla_Firefox"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" rounded-full shadow-lg shadow-[#ec8840] hover:scale-110 duration-300 px-10 p-3 cursor-pointer my-5 ">
                  <FaWikipediaW size={40} />
                </div>
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#ec8840] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              <h1 className="text-2xl  text-[#ec8840] text-center  mb-10">
                Ventajas
              </h1>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Se enfoca en la seguridad y privacidad de los usuarios. Ofrece
                funciones de protección contra seguimiento, bloqueo de cookies
                de terceros y protección contra sitios web maliciosos.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Compatible con una amplia variedad de sitios web y aplicaciones,
                incluyendo muchos que no están diseñados específicamente para el
                navegador.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Conocido por ser un navegador innovador, que a menudo introduce
                nuevas funciones y características que otros navegadores no
                tienen. Además, como software de código abierto, está respaldado
                por una comunidad de desarrolladores
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Ofrece una amplia variedad de opciones de personalización,
                incluyendo la capacidad de agregar extensiones y cambiar la
                apariencia de la interfaz de usuario.
              </p>
            </div>
            <div className="my-10 ">
              <h1 className="text-2xl  text-[#ec8840] text-center  mb-10">
                Desventajas
              </h1>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Consume más memoria que otros navegadores, lo que puede afectar
                el rendimiento en dispositivos con poca RAM o en equipos más
                antiguos.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Recibe actualizaciones frecuentes, lo que puede ser un problema
                para algunos usuarios que prefieren no tener que actualizar su
                navegador con tanta frecuencia.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Puede tener problemas de rendimiento en Mac, especialmente en
                sistemas operativos más antiguos.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={useScroll}
          className="items-center justify-center mt-10"
        >
          <AiOutlineArrowUp className="text-[#ec8840] " size={40} />
        </button>
      </div>
      <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
        Bryan Sañudo Garcia
      </h1>
    </div>
  );
};

export default Firefox;
