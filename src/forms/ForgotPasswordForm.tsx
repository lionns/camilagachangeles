import { ChangeEvent, useState } from "react";
import { InputText } from "../components/InputText";
import { InputButton } from "../components/InputButton";
import { validateEmail } from "../consts/validactions";
import { Typography } from "../components/Typography";
import { Action } from "../components/Action";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [postError, setPostError] = useState<string>("");

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValidation = validateEmail(email);

    setEmailError(emailValidation);

    if (emailValidation !== "") {
      return false;
    }

    setPostError(
      "Si esta dirección de correo electrónico se utilizó para crear una cuenta, recibirás instrucciones para restablecer tu contraseña. Por favor, verifica tu correo electrónico."
    );

    try {
      await fetch(
        `http://localhost:8080/api/notifications/forgotPassword/${email}`
      );
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {postError != "" ? (
        <div className="w-full space-y-5">
          <Typography
            as="p"
            variant="body"
            color="marron"
            content={postError}
          />
          <Action
            as="a"
            color="marron"
            content="Iniciar sesión"
            href="/iniciar-sesion"
            customClasses="w-full text-center"
          />
        </div>
      ) : (
        <>
          <Typography
            as="p"
            variant="body"
            color="marron"
            content="Ingresa la dirección de correo electrónico que utilizaste al registrarte y te enviaremos instrucciones para restablecer tu contraseña. Por razones de seguridad, nunca enviaremos tu contraseña por correo electrónico."
            customClasses="mb-5"
          />
          <InputText
            id="email"
            label="Correo electrónico"
            placeholder="correo@correo.com.co"
            type="email"
            errorMessage={emailError}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputButton
            type="submit"
            text="Restablecer contraseña"
            classList="mt-3"
          />
        </>
      )}
    </form>
  );
};
