import React from "react";

const Content = ({data}) => {
  return (
    <section className="text-gray-400 body-font bg-gray-900" id="content">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          {/* Title*/}
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Conoce nuestra variedad de Pizzas
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
          {/*Area Description*/}
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            En Pizzas Strapi contamos con una gran variedad de pizzas cada una, está creada 
            para enamorar a los diferentes paladares de los clientes, todas preparadas con 
            ingredientes frescos y debidamente seleccionados con altos estándares de calidad.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
        {/* Cards-Pizzas*/}
          {data.map((pizza, index) => (
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                {/* Image-Card*/}
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={pizza['img']}
                  alt="content"
                />
                {/*Rating*/}
                <div className="p-2 mb-3 text-yellow-400 flex flex-row rounded-lg items-center justify-around w-1/4 bg-pink-600">
                  <svg width="20" height="20" fill="currentColor">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                  </svg>
                  <h3 className="tracking-widest text-white text-base font-medium title-font">
                    {pizza['calificacion']}
                  </h3>
                </div>
                {/* Name*/}
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {pizza['nombre']}
                </h2>
                {/*Ingredients*/}
                <ul className="leading-relaxed text-base px-8">
                  {pizza["ingredientes"].map((ingrediente, index) => (
                    <li className="list-disc" key={`Ingrediente-${index}`}>
                      {ingrediente}
                    </li>
                  ))}
                </ul>
                {/* Prices*/}
                <div class="mt-4 flex flex-row items-center justify-around">
                  <div className="p-2 flex flex-col items-center justify-around rounded-lg">
                    <h4 className="text-white">Chica</h4>
                    <p>$ {pizza["precios"][0]}</p>
                  </div>
                  <div className="p-2 flex flex-col items-center justify-around rounded-lg">
                    <h4 className="text-white">Mediana</h4>
                    <p>$ {pizza["precios"][1]}</p>
                  </div>
                  <div className="p-2 flex flex-col items-center justify-around rounded-lg">
                    <h4 className="text-white">Grande</h4>
                    <p>$ {pizza["precios"][2]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
