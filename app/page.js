'use client';


import dynamic from 'next/dynamic';

const Revista = dynamic(() => import('@/components/Revista'), {
  ssr: false, // clave: deshabilita SSR
});

export default function Home() {
  return (
    <div className=" w-full h-screen"  style={{
        backgroundImage: "url('/fondoMadera.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
      <Revista />
    </div>
  );
}
