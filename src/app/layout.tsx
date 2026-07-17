import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIMO Real Estate | Propiedades de Lujo",
  description: "Agencia de bienes raíces especializada en propiedades de lujo y exclusivas en Quito, Ecuador. Encuentra tu hogar soñado con MIMO Real Estate.",
  keywords: ["bienes raices", "propiedades de lujo", "inmobiliaria", "casas exclusivas", "real estate", "quito", "ecuador"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
