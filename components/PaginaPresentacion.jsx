'use client';

import React from 'react';

export default function PaginaPresentacion() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Contenedor principal tipo revista */}
      <div className="bg-white bg-opacity-90 border-4 border-[#012956] h-full p-8 flex flex-col items-center max-w-5xl">

        {/* Título principal centrado */}
        <h1 className="text-lg md:text-xl  mb-4 font-bold text-gray-900">
         ¿Quiénes somos?
        </h1>

        {/* Contenedor de columnas */}
        <div className="flex flex-row space-x-1 md:space-x-2 space-y-6 md:space-y-0 w-full">

          {/* Columna izquierda */}
          <div className="flex-1 space-y-2">
            <h2 className="text-md  font-bold text-gray-900">Nuestra misión</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Brindar soluciones tecnológicas confiables y personalizadas, adaptadas a cada cliente, combinando experiencia, creatividad y compromiso.
            </p>

            <h2 className="text-md font-bold text-gray-900">Nuestro equipo</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Ingeniero en telecomunicaciones y dos ingenieros en ciencias informáticas, todos graduados en Cuba. Unimos habilidades para ofrecer soluciones prácticas y de calidad.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="flex-1 space-y-4">
            <h2 className="text-md font-bold text-gray-900">Nuestra visión</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Crecer como referente en servicios tecnológicos, manteniendo cercanía, atención personalizada y excelencia en cada proyecto.
            </p>

            <h2 className="text-md  font-bold text-gray-900">Valores</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Innovación, confiabilidad y compromiso con cada cliente. Queremos que la tecnología sea accesible y eficiente para todos.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

