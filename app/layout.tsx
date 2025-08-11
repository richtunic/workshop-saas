import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workshop SaaS - Gestión de Talleres Automotrices",
  description: "Sistema SaaS moderno para gestión integral de talleres automotrices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
