import React, {useState} from "react";

const Contact = ({dataPost, setDataPost}) => {
  const [dataForm, setDataForm] = useState({
    nombre: '',
    direccion: '',
    correo: '',
    celular: '',
    pedido: ''
  })

  const handleInputChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name] : event.target.value
    })
  }

  const sendOrder = (e) => {
    e.preventDefault();

    const dataF = {
      nombre: dataForm.nombre,
      direccion: dataForm.direccion,
      correo: dataForm.correo,
      celular: dataForm.celular,
      pedido: dataForm.pedido
    }
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataF)
    };

    fetch('http://localhost:1337/ordenes', requestOptions)
      .then(response => response.json())
      .then(data => setDataPost(data));
    
  }
  

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative py-24 px-5" id="pedidos">
      {/* Title*/}
      <div className="lg:w-1/2 w-full mb-8"> 
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Haz tu pedido
        </h1>
        <div className="h-1 w-20 bg-red-500 rounded"></div>
      </div>
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map*/}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 mapLocaticon"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6616309270976!2d-99.16978803509346!3d19.427020586887494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1632077471147!5m2!1ses!2smx"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-red-400 leading-relaxed" href="mailto:pedidos@pizzas-strapi.com">pedidos@pizzas-strapi.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELÉFONO
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        {/* Form*/}
        <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          onSubmit={sendOrder}
        >
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            ¡Haz tu pedido aquí!
          </h2>
          <p className="leading-relaxed mb-5">  
            La forma más fácil y sencilla de pedir tu pizza, sin necesidad de hacer 
            llamada o ir a la pizzería, paga en efectivo o tarjeta en la entrega de tu pedido.
          </p>
          <div className="relative mb-4">
            <label for="nombre" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleInputChange} 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="direccion" className="leading-7 text-sm text-gray-400">
              Dirección de entrega
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              onChange={handleInputChange} 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="correo" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              onChange={handleInputChange} 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="celular" className="leading-7 text-sm text-gray-400">
              Celular o número telefónico
            </label>
            <input
              type="text"
              id="celular"
              name="celular"
              onChange={handleInputChange} 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="pedido" className="leading-7 text-sm text-gray-400">
              Pedido
            </label>
            <textarea
              id="pedido"
              name="pedido"
              onChange={handleInputChange} 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            type='submit'
          >
            Concluir pedido
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Si vas a pagar en efectivo te agradeceríamos tener el dinero 
            exacto para hacer más rápido el proceso de entrega del repartidor,
            también puedes pagar con tarjeta.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
