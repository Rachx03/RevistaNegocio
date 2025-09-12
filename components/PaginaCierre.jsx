'use client';

import React from 'react';

export default function PaginaCierre() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Contenedor principal tipo revista */}
      <div className="bg-white bg-opacity-90 border-4 border-[#012956] h-full p-8 flex flex-col items-center max-w-5xl">

        {/* Título principal centrado */}
        <h1 className="text-lg md:text-xl mb-4 font-bold text-gray-900">
          ¡Gracias por leernos!
        </h1>

        {/* Contenedor de columnas */}
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-6 md:space-y-0 w-full">

          {/* Columna izquierda */}
          <div className="flex-1 space-y-2">
            <h2 className="text-md font-bold text-gray-900">Nuestro compromiso</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              En Techno Solutions trabajamos para ofrecer servicios confiables, personalizados y de calidad. Queremos que tu experiencia con nosotros sea segura, eficiente y satisfactoria.
            </p>

            <h2 className="text-md font-bold text-gray-900">Contáctanos</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Teléfono: +598 99 845 075<br/>
              Email: erne@gmail.com<br/>
              Sitio web: www.technosolutions.com
            </p>
          </div>

          {/* Columna derecha */}
          <div className="flex-1 space-y-4 flex flex-col items-center justify-center">
            {/* Imagen representativa */}
            <img
              src="/logo.svg"
              alt="Techno Solutions"
              className="w-full max-w-xs object-contain"
            />

            <p className="text-gray-900 text-[12px] leading-relaxed text-center">
              Síguenos en nuestras redes sociales para estar al día con novedades y ofertas.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
