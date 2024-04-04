import { NavLink } from "react-router-dom";
import LogoMarron from "../assets/imgs/logo-marron.svg";
import { Typography } from "../components/Typography";
import { LoginForm } from "../forms/LoginForm";

export const Login = () => {
  return (
    <>
      <nav className="w-full p-5 flex items-center justify-center">
        <NavLink to="/">
          <img src={LogoMarron} alt="Camila Gacha Ángeles" />
        </NavLink>
      </nav>
      <main className="mx-auto min-h-screen max-w-4xl px-5 pt-10 space-y-5">
        <Typography
          as="h1"
          variant="title"
          color="marron"
          content="Inicio de sesión"
          customClasses="text-center"
        />
        <LoginForm />
      </main>
    </>
  );
};
