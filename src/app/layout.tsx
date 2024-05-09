import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.sass";
import Header from '@/components/UI/header'
import Partners from '@/components/UI/partners'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encontro de Formação de Professores de Matemática de Educação Básica",
  description: "Evento satélite da XI Bienal de Matemática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Partners />
      </body>
    </html>
  );
}
