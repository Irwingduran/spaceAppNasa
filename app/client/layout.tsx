import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Refugio Kit de herramientas",
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
