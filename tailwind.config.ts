import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "kola-img":
          'url("https://images.hindustantimes.com/img/2022/10/20/1600x900/Rishab_Kantara_101022_1200_1665677783663_1666271495289_1666271495289.jpg")',
      },
    },
  },
  plugins: [],
};
export default config;
