import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Exo } from 'next/font/google';
import FirebaseAnalytics from "@/firebase";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-exo",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techno Solutions ",
  description:
    "Techno Solutions ofrece servicios de reparación de computadoras (PCFix), mantenimiento de dispositivos electrónicos (ElectroFix) y desarrollo web profesional (WebPro). Innovación, soporte y soluciones digitales confiables.",
   keywords: [
    "arreglar computadora lenta",
    "reparar pc que no enciende",
    "limpiar virus computadora",
    "reparación de laptops",
    "servicio técnico computadoras",
    "arreglar impresora",
    "reparar celulares y tabletas",
    "crear página web barata",
    "diseño web profesional",
    "hacer tienda online",
    "soporte técnico cerca de mí",
    "instalación windows",
    "optimizar pc",
    "mantenimiento computadoras",
    "recuperar archivos perdidos",
    "configurar redes domésticas",
    "actualizar software",
    "consultoría informática",
    "desarrollo web empresas",
    "diseño de portafolios web",
    "landing pages",
    "Techno Solutions",
    "PCFix",
    "ElectroFix",
    "WebPro",
    "reparación urgente pc",
    "servicio técnico confiable",
    "soporte pc y laptops",
    "mantenimiento preventivo computadoras",
    "reparación de hardware",
    "soluciones tecnológicas",
    "empresa de tecnología en Uruguay"
  ],
  authors: [{ name: "Techno Solutions", url: "https://i.ibb.co/LDzpp56D/logo.png" }],
  openGraph: {
    title: "Techno Solutions - Soluciones Tecnológicas Profesionales",
    description:
      "Servicios de PCFix, ElectroFix y WebPro. Innovación, soporte y soluciones digitales confiables para empresas y particulares.",
    url: "https://i.ibb.co/LDzpp56D/logo.png",
    siteName: "Techno Solutions",
    images: [
      {
        url: "https://i.ibb.co/LDzpp56D/logo.png",
        width: 800,
        height: 600,
        alt: "Techno Solutions Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Solutions - Soluciones Tecnológicas Profesionales",
    description:
      "Servicios de PCFix, ElectroFix y WebPro. Innovación, soporte y soluciones digitales confiables.",
    images: ["https://i.ibb.co/LDzpp56D/logo.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} antialiased`}
      >
       <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
