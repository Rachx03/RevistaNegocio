'use client';

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import PaginaInicio from "./PaginaInicio";
import PaginaPresentacion from "./PaginaPresentacion";
import PaginaPCFix from "./PaginaPCFix";
import PaginaElectroFix from "./PaginaElectroFix";
import PaginaWebPro from "./PaginaWebPro";
import PaginaCierre from "./PaginaCierre";

// Cargamos HTMLFlipBook solo en cliente
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

// Tamaño base de la revista
const FLIPBOOK_BASE_WIDTH = 400;
const FLIPBOOK_BASE_HEIGHT = 500;

// Componente para portada/contraportada
export const PageCover = React.forwardRef((props, ref) => (
  <div
    className="page page-cover overflow-hidden"
    ref={ref}
    data-density="hard"
    style={{ width: "100%", height: "100%" }}
  >
    <div className="page-content w-full h-full">{props.children}</div>
  </div>
));

// Componente para páginas normales
export const Page = React.forwardRef((props, ref) => (
  <div
    className="page shadow-lg overflow-hidden"
    ref={ref}
    style={{ width: "100%", height: "100%" }}
  >
    <div className="page-content w-full h-full">{props.children}</div>
  </div>
));

export default function Revista() {
  const [platos, setPlatos] = useState([]);
  const [mounted, setMounted] = useState(false);
  const flipBookRef = useRef(null);
  const [flipbookSize, setFlipbookSize] = useState({ width: FLIPBOOK_BASE_WIDTH, height: FLIPBOOK_BASE_HEIGHT });

  // Ajusta el tamaño según la ventana
  const handleResize = () => {
    const maxWidth = Math.min(window.innerWidth - 40, FLIPBOOK_BASE_WIDTH);
    const maxHeight = Math.min(window.innerHeight - 40, FLIPBOOK_BASE_HEIGHT);
    setFlipbookSize({ width: maxWidth, height: maxHeight });
  };

  useEffect(() => {
    setMounted(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  useEffect(() => {
    const fetchPlatos = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        setPlatos(data.meals?.slice(0, 50) || []);
      } catch (error) {
        console.error("Error al obtener los platos:", error);
      }
    };
    fetchPlatos();
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full  max-w-[90vw] flex justify-center items-center max-h-[90vh]">
        <HTMLFlipBook
          width={flipbookSize.width}
          height={flipbookSize.height}
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          ref={flipBookRef}
         
        >
          <PageCover>
            <PaginaInicio />
          </PageCover>
          <Page>
            <PaginaPresentacion />
          </Page>
          <Page>
            <PaginaPCFix />
          </Page>
          <Page>
            <PaginaElectroFix />
          </Page>
          <Page>
            <PaginaWebPro />
          </Page>
          <Page>
            <PaginaCierre />
          </Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
