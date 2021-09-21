import React from "react";
import heroImg from '../img/hero.webp';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            ¡Las mejores pizzas de la Ciudad!
          </h1>
          <p className="mb-8 leading-relaxed">
            Somos Pizzas Strapi la mejor opción para comer pizzas en la CDMX, 
            una vez que pruebes una de nuestras pizzas te volverás un cliente 
            recurrente, ya que nuestras pizzas y servicio de calidad son inolvidables.
          </p>
          <div className="flex justify-center">
            <Link className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg cursor-pointer"
              activeClass="active"
              to="pedidos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Realiza tu pedido
            </Link>
            <Link className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer"
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Conoce nuestras pizzas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;