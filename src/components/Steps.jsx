import React from "react";
import stepsImg from '../img/steps.webp';

const Steps = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="pasos">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-8"> 
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Pasos para realizar tu pedido
          </h1>
          <div className="h-1 w-20 bg-red-500 rounded"></div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  PASO 1
                </h2>
                <p className="leading-relaxed">
                  Conoce nuestras pizzas, ve los ingredientes, tamaños y precio de cada una.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  PASO 2
                </h2>
                <p className="leading-relaxed">
                  Una vez seleccionada(s) la(s) pizza(s) que vas a pedir haz tu pedido
                  de la forma más cómoda para ti, en esta misma página encontrarás 
                  nuestra ubicación si es que quieres hacer tu orden físicamente en la 
                  pizzería y degustarla(s) en el lugar o también te proporcionamos nuestro 
                  número telefónico para que nos llames o puedes hacer tu pedido desde el 
                  formulario de esta página.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  PASO 3
                </h2>
                <p className="leading-relaxed">
                  Si pediste tu pizza por teléfono o por medio del formulario de esta 
                  página espera el tiempo estimado que se te dio, nuestros trabajadores 
                  estarán realizando tu pedido, en el caso de que hayas hecho el pedido 
                  mediante el formulario se te enviará un correo electrónico de cuando el 
                  repartidor salga de la pizzería con tu pedido, te llamaremos en caso de 
                  que el repartidor no encuentre tu casa.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  FINALMENTE
                </h2>
                <p className="leading-relaxed">
                  Recibe tu pedido, haz el pago de este, y disfruta de tu(s) pizza(s) Strapi.
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src={stepsImg}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
