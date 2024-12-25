import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      backgroundImage: {
        "custom-gradient-with-image":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/assets/images/homeBackgroundImage.jpg')",
        "custom-gradient-with-image-cta":
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url('/assets/images/ctaBackgroundImage.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
