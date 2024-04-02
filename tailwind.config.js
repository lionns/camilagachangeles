/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: "Cinzel",
      sans: "Roboto Regular",
    },
    colors: {
      /* COLORES PRINCIPALES */
      "terracota-blush": "rgba(184, 136, 118, 1)",
      "marron-profundo": "rgba(43, 36, 27, 1)",
      "oro-envejecido": "rgba(162, 148, 98, 1)",
      "grisaceo-oliva": "rgba(104, 87, 64, 1)",
      "gris-suave": "rgba(213, 204, 198, 1)",
      "blanco-puro": "rgba(255, 255, 255, 1)",
      "verde-suave": "rgba(102, 187, 106, 1)",
      "rojo-suave": "rgba(239, 83, 80, 1)",
      /* COLORES SECUNDARIOS */
      "azul-celeste": "rgba(208, 219, 238, 1)",
      "rosa-lavanda": "rgba(234, 210, 229, 1)",
      "gris-violeta": "rgba(190, 196, 224, 1)",
      "gris-perla": "rgba(225, 230, 220, 1)",
      "verde-menta": "rgba(189, 226, 210, 1)",
      /* COLORES CON OPACIDAD */
      "marron-profundo-75": "rgba(43, 36, 27, 0.75)",
      "marron-profundo-50": "rgba(43, 36, 27, 0.50)",
      "terracota-blush-75": "rgba(184, 136, 118, 0.75)",
      "rojo-suave-10": "rgba(239, 83, 80, 0.10)",
      "verde-suave-10": "rgba(102, 187, 106, 0.10)",
      "verde-suave-50": "rgba(102, 187, 106, 0.50)",
    },
    fontSize: {
      /* HEADING (M) */
      "9xl": [
        "10rem",
        {
          fontWeight: 700,
          lineHeight: 1,
        },
      ],
      "h-md": [
        "2.5rem",
        {
          fontWeight: 700,
          lineHeight: "normal",
        },
      ],
      /* HEADING (S) */
      "h-sm": [
        "2rem",
        {
          fontWeight: 700,
          lineHeight: "normal",
        },
      ],
      /* SUBHEADING (M) */
      "sh-md": [
        "2rem",
        {
          fontWeight: 400,
          lineHeight: "normal",
        },
      ],
      /* SUBHEADING (S) */
      "sh-sm": [
        "1.5rem",
        {
          fontWeight: 400,
          lineHeight: "normal",
        },
      ],
      /* BODY (M) */
      "body-md": [
        "1rem",
        {
          fontWeight: 400,
          lineHeight: "1.625rem",
        },
      ],
      /* BODY (S) */
      "body-sm": [
        "0.875rem",
        {
          fontWeight: 400,
          lineHeight: "1.5rem",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
