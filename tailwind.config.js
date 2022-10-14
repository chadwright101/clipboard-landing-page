/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/pug/pages/index.pug", "./src/**/*.{js,ts,jsx,tsx,pug}"],
  theme: {
    fontFamily: {
      body: ['"Bai Jamjuree", sans-serif'],
    },
    colors: {
      clipboard: {
        cyan: "hsl(171, 66%, 44%)",
        blue: "hsl(233, 100%, 69%)",
        darkgrey: "hsl(210, 10%, 33%)",
        grey: "hsl(201, 11%, 66%)",
        darkcyan: "#249e89",
        darkblue: "#4f62d8",
      },
    },
    fontSize: {
      pararaph: ["1rem", "28px"],
      h4: "1.2rem",
      h3: "1.5rem",
      h2: "1.75rem",
      h1: ["2rem", "40px"],
      pararaphDesktop: ["1.125rem", "28px"],
      h3Desktop: "1.75rem",
      h2Desktop: "2.25rem",
      h1Desktop: ["2.75rem", "40px"],
    },
    extend: {
      width: {
        computer: "752px",
      },
      height: {
        computer: "572px",
      },
    },
  },
  plugins: [],
};
