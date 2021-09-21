import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/*Logo*/}
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl hover:cursor-pointer">Pizzas Strapi</span>
        </a>
        {/* Navigation*/}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white cursor-pointer"
            activeClass="active"
            to="content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Conoce nuestras pizzas</Link>
          <Link className="mr-5 hover:text-white cursor-pointer"
            activeClass="active"
            to="reseñas"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Reseñas</Link>
          <Link className="mr-5 hover:text-white cursor-pointer"
            activeClass="active"
            to="pasos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >¿Comó hago un pedido?</Link>
          <Link className="mr-5 hover:text-white cursor-pointer"
            activeClass="active"
            to="pedidos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Haz tu pedido</Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;