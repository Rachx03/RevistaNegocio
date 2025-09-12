'use client';

import React from 'react';

export default function PaginaPCFix() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white bg-opacity-90 border-4 border-[#012956] h-full p-8 flex flex-col items-center max-w-5xl">
        
        <h1 className="text-lg md:text-xl mb-4 font-bold text-gray-900">
          PCFix
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-2 space-y-6 md:space-y-0 w-full">

          {/* Columna izquierda */}
          <div className="flex-1 space-y-2">
            <h2 className="text-md font-bold text-gray-900">Descripción</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Especialistas en mantener tus computadoras al máximo. Reinstalación de sistemas, eliminación de virus y optimización de rendimiento.
            </p>

            <h2 className="text-md font-bold text-gray-900">Pasos del servicio</h2>
            <ul className="text-gray-900 text-[12px] list-disc list-inside leading-relaxed">
              <li>Contacto: Cuéntanos tu necesidad</li>
              <li>Evaluación: Analizamos tu caso</li>
              <li>Servicio: Rápido y profesional</li>
              <li>Entrega: Equipo listo y soporte disponible</li>
            </ul>
          </div>

          {/* Columna derecha */}
          <div className="flex-1 space-y-2">
            <h2 className="text-md font-bold text-gray-900">Contacto</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              📞 +598 99 845 075 <br/>
              ✉️ erne@gmail.com
            </p>

            <h2 className="text-md font-bold text-gray-900">Beneficio</h2>
            <p className="text-gray-900 text-[12px] leading-relaxed">
              Prevenimos futuros problemas, garantizando tu equipo rápido, seguro y estable.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}
