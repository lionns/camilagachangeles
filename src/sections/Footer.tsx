import { Link } from "react-router-dom";
import LogoGrisSuave from "../assets/imgs/logo-gris-suave.svg";

export const Footer = () => {
  return (
    <footer className="absolute h-[277px] md:h-[206px] bottom-0 w-full py-10 px-5 md:p-10 bg-marron-profundo">
      <section className="m-auto w-full max-w-5xl flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left gap-10">
        <Link to="/">
          <img src={LogoGrisSuave} alt="" />
        </Link>
        <nav>
          <ul className="flex flex-col gap-6 text-gris-suave text-body-sm md:text-body-md">
            <Link to="/politica-de-cookies">Políticas de cookies</Link>
            <Link to="/terminos-de-uso">Términos de uso</Link>
            <Link to="/politica-de-privacidad">Políticas de privacidad</Link>
          </ul>
        </nav>
      </section>
    </footer>
  );
};
