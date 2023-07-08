/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
      colors: {
        "clr-nuetral-100": "hsl(0, 0%, 100%)",
        "clr-nuetral-200": "hsl(189, 41%, 97%)",
        "clr-nuetral-300": "hsl(185, 41%, 82%)",
        "clr-nuetral-400": "hsl(184, 14%, 56%)",
        "clr-nuetral-500": "hsl(186, 14%, 43%)",
        "clr-nuetral-600": "hsl(183, 100%, 15%)",
        "clr-primary-300": "hsl(172, 67%, 65%)",
        "clr-primary-400": "hsl(172, 67%, 45%)",
      },
    },
    screens: {
      sm: "640px",
      lg: "1280px",
    },
  },
  plugins: [],
};
