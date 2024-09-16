import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter-regular)", ...fontFamily.sans],
        interSemiBold: ["var(--font-inter-semibold)", ...fontFamily.sans],
        interBold: ["var(--font-inter-bold)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--green)",
        white: "var(--white)",
        grey700: "var(--grey700)",
        grey800: "var(--grey800)",
        grey900: "var(--grey900)",
      },
    },
  },
  plugins: [],
}
export default config
