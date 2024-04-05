import { ChangeEvent, useCallback, useState } from "react";
import { PasswordRules } from "../components/PasswordRules";
import { InputText } from "../components/InputText";
import { InputFile } from "../components/InputFile";
import { InputButton } from "../components/InputButton";
import { Typography } from "../components/Typography";
import {
  validateEmail,
  validatePassword,
  validateText,
} from "../consts/validactions";

export const SignupForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File>();

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  // const [imageError, setImageError] = useState<string>("");
  const [postError] = useState<string>("");

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      const newFile = fileList?.[0] ?? undefined;
      setImage(newFile);
    },
    []
  );

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Realiza validaciones
    const emailValidation = validateEmail(email);
    const nameValidation = validateText(name);
    const passwordValidation = validatePassword(password);

    // Actualiza los estados de error
    setEmailError(emailValidation);
    setNameError(nameValidation);
    setPasswordError(passwordValidation);

    // Verifica que hay errores
    if (
      emailValidation !== "" ||
      nameValidation !== "" ||
      passwordValidation !== ""
    ) {
      return false;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {postError != "" && (
        <p className="p-3 bg-rojo-suave-10 text-rojo-suave border-rojo-suave border-[1.5px]">
          {postError}
        </p>
      )}
      <InputText
        id="name"
        label="Nombre completo"
        placeholder="Fernanda Rico"
        type="text"
        errorMessage={nameError}
        value={name}
        handleChange={(e) => setName(e.target.value)}
        required
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
      <PasswordRules />
      <InputText
        id="password"
        label="Contraseña"
        placeholder="********"
        type="password"
        errorMessage={passwordError}
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        required
      />
      <InputFile
        id="image"
        label="Imagen de perfil"
        value={image}
        handleChange={handleFileChange}
      />
      <InputButton type="submit" text="Registrarse" classList="mt-3" />
      <Typography
        as="div"
        variant="body"
        color="marron"
        content={`<p class="text-left">Al registrarte, aceptas los <a class="text-terracota-blush" href="/terminos-de-uso" target="_blank">Términos de uso</a> y la <a class="text-terracota-blush" href="/politica-de-privacidad" target="_blank">Política de privacidad</a> de Camila Gacha Ángeles.</p><a class="hover:text-terracota-blush" href="/inicio-de-sesion">¿Ya tienes una cuenta? <span class="text-terracota-blush">Iniciar sesión</span></a>`}
        isHTML={true}
        customClasses="!mt-10"
        customClassesDiv="flex flex-col text-center gap-10"
      />
    </form>
  );
};
