import type { Metadata } from "next";

import "./globals.css";
import Main from "./main";

import { MongoDbService } from "@/services/mongodb/mongodb-service";

export const metadata: Metadata = {
  title: "Aula Diversa",
  description: "Educación inclusiva y diversa para todos",
  category: "Education",
  creator: "Sergio Fernández Cuellar",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  MongoDbService.connect();

  return (
    <html lang="es">
      <body className="w-full h-screen">
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;
