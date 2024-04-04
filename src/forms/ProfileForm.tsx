import { ChangeEvent, useState } from "react";
import { InputText } from "../components/InputText";
import { User } from "../types/User";
import { PasswordRules } from "../components/PasswordRules";
import { InputButton } from "../components/InputButton";
import { validatePassword, validateText } from "../consts/validactions";

export const ProfileForm = ({
  userInfo,
}: {
  userInfo: User | null | undefined;
}) => {
  const [name, setName] = useState<string>(userInfo?.name ? userInfo.name : "");
  const [email, setEmail] = useState<string>(
    userInfo?.email ? userInfo.email : ""
  );
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [oldPasswordError, setOldPasswordError] = useState<string>("");
  const [newPasswordError, setNewPasswordError] = useState<string>("");
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>("");
  const [postError, setPostError] = useState<string>("");

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userInfo?.email !== email) {
      setPostError(
        "Lo sentimos, se ha producido un problema. Por favor, inténtelo de nuevo más tarde."
      );
      return false;
    }

    const nameValidation = validateText(name);
    const newPasswordValidation = validatePassword(newPasswordError);
    const repeatPasswordValidation = repeatPassword === "" ? "La contraseña es obligatoria" : "";
    const oldPasswordValidation = oldPassword === "" ? "La contraseña es obligatoria" : "";
    
    if (
      nameValidation !== "" ||
      newPasswordValidation !== "" ||
      oldPasswordValidation !== "" ||
      repeatPasswordValidation !== ""
    ) {
      setNameError(nameValidation);
      setNewPasswordError(newPasswordValidation);
      setOldPasswordError(oldPasswordValidation);
      setRepeatPasswordError(repeatPasswordValidation);
    }
  };

  return (
    <form className="space-y-2" noValidate onSubmit={handleSubmit}>
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
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        required
        classList="!bg-marron-profundo-50 pointer-events-none"
      />
      <InputText
        id="name"
        label="Nombre completo"
        placeholder="Fernanda Rico"
        type="text"
        value={name}
        errorMessage={nameError}
        handleChange={(e) => setName(e.target.value)}
        required
      />
      <InputText
        id="oldPassword"
        label="Contraseña actual"
        placeholder="********"
        type="password"
        value={oldPassword}
        errorMessage={oldPasswordError}
        handleChange={(e) => setOldPassword(e.target.value)}
        required
      />
      <PasswordRules />
      <InputText
        id="newPassword"
        label="Nueva contraseña"
        placeholder="********"
        type="password"
        value={newPassword}
        errorMessage={newPasswordError}
        handleChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <InputText
        id="repeatPassword"
        label="Repetir contraseña"
        placeholder="********"
        type="password"
        value={repeatPassword}
        errorMessage={repeatPasswordError}
        handleChange={(e) => setRepeatPassword(e.target.value)}
        required
      />
      <InputButton type="submit" text="Actualizar datos" />
    </form>
  );
};
