import { Action } from "../components/Action";
import { Typography } from "../components/Typography";
import Logo from "../icons/CamilaGacha.svg";

type ErrorProps = {
  error: string;
  message: string;
  contextMessage: string;
};

export const Error = ({ error, message, contextMessage }: ErrorProps) => (
  <section className="m-auto flex w-full flex-wrap place-items-center items-center justify-center">
    <a className="w-96" href="/">
      <img src={Logo} alt="Camila Gacha Ángeles" />
    </a>
    <div className="flex flex-col items-center m-5 md:m-10 text-center">
      <Typography
        as="h1"
        variant="title"
        color="marron"
        customClasses="mb-10"
        content={`error ${error}`}
      />
      <Typography
        as="h2"
        variant="subtitle"
        color="marron"
        content={`${message}`}
      />

      <p className="font-sans my-5 max-w-[410px] text-body-sm md:text-body-md">
        {contextMessage}
      </p>

      <Action
        color="marron"
        as="a"
        aria-label="Volver a la página principal"
        href="/"
        content="Ir al inicio"
      />
    </div>
  </section>
);
