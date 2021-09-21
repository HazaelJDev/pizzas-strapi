import React from 'react';
import imgLoader from '../img/loader.gif';

const Loader = () => {
    return (
        <div className="loader_app w-full flex flex-col justify-around items-center mt-6">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img
                    className="object-cover object-center rounded"
                    alt="loader"
                    src={imgLoader}
                />
            </div>
            <h1 className="text-white font-semibold text-5xl">Cargando...</h1>
        </div>
    );
}

export default Loader;