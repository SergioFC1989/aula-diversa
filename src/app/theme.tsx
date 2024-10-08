"use client";

import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { createTheme, ThemeProvider } from "@fluentui/react";
import { ReactNode, useEffect, useState } from "react";

const myTheme = createTheme({
  fonts: {
    tiny: {
      fontFamily: "Montserrat, sans-serif",
    },
    small: {
      fontFamily: "Montserrat, sans-serif",
    },
    medium: {
      fontFamily: "Montserrat, sans-serif",
    },
    large: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
  palette: {
    themePrimary: "#28a88f",
    themeLighterAlt: "#f4fcfa",
    themeLighter: "#d4f1eb",
    themeLight: "#b1e5db",
    themeTertiary: "#6ecbb8",
    themeSecondary: "#3bb39b",
    themeDarkAlt: "#249780",
    themeDark: "#1f806c",
    themeDarker: "#175e50",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#afaead",
    neutralSecondary: "#959493",
    neutralSecondaryAlt: "#959493",
    neutralPrimaryAlt: "#7c7a79",
    neutralPrimary: "#141414",
    neutralDark: "#484746",
    black: "#2e2d2d",
    white: "#ffffff",
  },
});

const Theme = ({ children }: { children: ReactNode }) => {
  const [isHidrated, setIsHidrated] = useState(false);

  useEffect(() => {
    setIsHidrated(true);
  }, []);

  if (!isHidrated) {
    return null;
  }

  initializeIcons();

  return (
    <ThemeProvider applyTo="body" theme={myTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
