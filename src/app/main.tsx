"use client";

import Image from "next/image";
import { ReactNode } from "react";

import Logo from "@/assets/images/logo.png";
import { AppProvider } from "@/lib/context/app-context";

import Theme from "./theme";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <Theme>
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-2 print:hidden">
          <Image src={Logo} alt="Logo" width={290} height={290} />
        </header>
        <div className="w-full h-screen overflow-auto print:h-auto flex flex-col px-1 lg:px-10 pt-28 print:pt-10 pb-10 bg-white">
          {children}
        </div>
      </Theme>
    </AppProvider>
  );
};

export default Main;
