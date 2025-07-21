import "./globals.css";

import type { Metadata } from "next";

import Main from "./main";

export const metadata: Metadata = {
  title: "Aula Diversa",
  description: "Author: Sergio Fernández Cuellar",
  category: "Education",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="es">
    <body className="w-full h-screen">
      <Main>{children}</Main>
    </body>
  </html>
);

export default RootLayout;
