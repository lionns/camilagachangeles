import { Error } from "./sections/Error";

export const ErrorPage = () => (
  <Error
    error="404"
    message="Página no encontrada"
    contextMessage="¡Oh, disculpa el desvío celestial! Parece que has tomado una ruta interdimensional que no conduce a ningún destino conocido. Los ángeles guardianes digitales están desplegando sus alas para guiarte de nuevo a la senda correcta."
  />
);
