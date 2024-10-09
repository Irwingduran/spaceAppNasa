import type { Metadata } from "next";
import "./styles/globals.css";



export const metadata: Metadata = {
  title: "Refugio | Start",
  description: "Transparencia, Confianza, rastreabilidad y gestión de emergencias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
