import { ChangeEvent, useState } from "react";
import { validateEmail } from "../consts/validactions";
import { InputText } from "../components/InputText";
import { InputButton } from "../components/InputButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [postError, setPostError] = useState<string>("");

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reliza validaciones
    const emailValidation = validateEmail(email);
    const passwordValidation =
      password === "" ? "La contraseña es obligatoria" : "";

    // Actualiza los estados de error
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    // Verifica si hay errores
    if (emailValidation !== "" || passwordValidation !== "") {
      return false; // No se hace consumo de API si hay errores
    }

    const result = await login(email, password);
    result !== "ok" ? setPostError(result) : navigate("/");
  };

  return (
    <form
      className="space-y-2 flex flex-col"
      onSubmit={handleSubmit}
      noValidate
    >
      {postError != "" && (
        <p className="p-3 bg-rojo-suave-10 text-rojo-suave border-rojo-suave border-[1.5px]">
          {postError}
        </p>
      )}
      <InputText
        id="email"
        label="Correo electrónico"
        placeholder="correo@dominio.com"
        type="email"
        errorMessage={emailError}
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputText
        id="password"
        label="Contraseña"
        placeholder="**********"
        type="password"
        errorMessage={passwordError}
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        required
      />
      <NavLink
        to="/olvidaste-tu-contrasena"
        className="text-right hover:text-terracota-blush"
      >
        ¿Olvidaste tu contraseña?
      </NavLink>
      <InputButton type="submit" text="Iniciar sesión" classList="!my-5" />
      <NavLink
        to="/registro"
        className="text-center hover:text-terracota-blush"
      >
        ¿Necesitas una cuenta?{" "}
        <span className="text-terracota-blush">Registrate</span>
      </NavLink>
    </form>
  );
};
