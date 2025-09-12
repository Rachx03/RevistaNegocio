'use client';

import React from 'react';

export default function PaginaElectroFix() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white bg-opacity-90 border-4 border-[#012956] h-full p-8 flex flex-col items-center max-w-5xl">
        
        <h1 className="text-lg md:text-xl mb-4 font-bold text-gray-900">
          ElectroFix
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-2 space-y-6 md:space-y-0 w-full">

          {/* Columna izquierda */}
          <div className="flex-1 space-y-2">
            <h2 className="text-md font-bold text-gray-900">Descripción</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Mantenimiento y reparación de computadoras, impresoras y otros dispositivos electrónicos.
            </p>

            <h2 className="text-md font-bold text-gray-900">Servicios</h2>
            <ul className="text-gray-900 text-[12px] list-disc list-inside leading-relaxed">
              <li>Diagnóstico de fallas</li>
              <li>Mantenimiento preventivo</li>
              <li>Solución de problemas técnicos</li>
              <li>Reparación de dispositivos</li>
            </ul>
          </div>

          {/* Columna derecha */}
          <div className="flex-1 space-y-2">
            <h2 className="text-md font-bold text-gray-900">Beneficio</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Garantizamos equipos confiables, seguros y eficientes, prolongando su vida útil.
            </p>

            <h2 className="text-md font-bold text-gray-900">Contacto</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              📞 +598 99 845 075 <br/>
              ✉️ erne@gmail.com
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
