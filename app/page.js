'use client';


import dynamic from 'next/dynamic';

const Revista = dynamic(() => import('@/components/Revista'), {
  ssr: false, // clave: deshabilita SSR
});

export default function Home() {
  return (
    <div className=" w-full h-screen bg-[url('/fondoMadera.jpeg')] bg-cover bg-center">
      <Revista />
    </div>
  );
}
