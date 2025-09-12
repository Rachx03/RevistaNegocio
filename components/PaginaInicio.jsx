'use client';

import React from 'react';

export default function PaginaInicio() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#fdfcf9]">
      {/* Contenedor tipo revista */}
      <div className="bg-white shadow-lg w-full h-full max-w-2xl border-4 border-[#012956] flex flex-col items-center p-6">

        {/* Logo y título */}
        <div className="flex flex-col items-center mb-1">
          <img
            src="/logo.svg"
            alt="Techno Solutions"
            className="w-36 h-32 object-contain "
          />
          <h1 className="text-xl font-serif font-bold text-gray-900 text-center">
            Techno Solutions
          </h1>
          <p className="text-gray-900 italic mt-1 text-center text-[12px]">
            Innovación, soporte y soluciones digitales
          </p>
        </div>

        {/* Separador elegante */}
        <div className="w-24 h-1 bg-[#012956] my-4 rounded-full"></div>

        {/* Texto introductorio en columnas estilo revista */}
        <div className="flex flex-col md:flex-row md:space-x-4 text-gray-900 text-[12px] leading-relaxed">
          <p className="flex-1 mb-3 md:mb-0">
            En Techno Solutions llevamos tu negocio y tus dispositivos al siguiente nivel, ofreciendo servicios de reparación de computadoras, mantenimiento electrónico y desarrollo web profesional.
          </p>
          <p className="flex-1">
            Nuestro compromiso es brindar soluciones confiables, personalizadas y de calidad, combinando experiencia, innovación y atención cercana a cada cliente.
          </p>
        </div>

        {/* Pie de página opcional */}
        <div className="mt-4 text-gray-800 text-[10px] italic text-center">
          Descubre nuestra revista y conoce todos nuestros servicios
        </div>

      </div>
    </div>
  );
}
