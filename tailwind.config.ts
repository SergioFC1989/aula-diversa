/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        s: "412px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "primary-color": "#28a88f",
      },
      spacing: {
        "100%": "100%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
        "20%": "20%",
        "10%": "10%",
        "5%": "5%",
      },
    },
  },
  plugins: [
    function ({
      addComponents,
    }: {
      addComponents: (components: Record<string, any>) => void;
    }) {
      const newComponents = {
        ".text-ellipsis-custom": {
          "@apply text-ellipsis overflow-hidden whitespace-nowrap": {},
        },
      };

      addComponents(newComponents);
    },
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: {
          variants?: string[];
          respectPrefix?: boolean;
          respectImportant?: boolean;
        }
      ) => void;
    }) {
      const printUtilities = {
        "@media print": {
          ".print": {
            "-webkit-print-color-adjust": "exact",
            "print-color-adjust": "exact",
          },
        },
      };

      addUtilities(printUtilities);
    },
  ],
};
export default config;
