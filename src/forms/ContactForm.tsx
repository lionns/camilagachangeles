import { ChangeEvent, useState } from "react";
import { InputText } from "../components/InputText";
import { InputButton } from "../components/InputButton";
import {
  validateEmail,
  validatePhoneNumber,
  validateTextNumber,
} from "../consts/validactions";

export const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const [backResponse, setBackResponse] = useState<string>("");

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValidation = validateTextNumber(name);
    const emailValidation = validateEmail(email);
    const phoneValidation = validatePhoneNumber(phone);
    const messageValidation = validateTextNumber(message);

    setNameError(nameValidation);
    setEmailError(emailValidation);
    setPhoneError(phoneValidation);
    setMessageError(messageValidation);

    if (
      nameValidation !== "" ||
      emailValidation !== "" ||
      phoneValidation !== "" ||
      messageValidation !== ""
    ) {
      return false;
    }

    await fetch("http://localhost:8080/api/notifications/emailContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: name,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "El mensaje ha sido enviado satisfactoriamente.") {
          setBackResponse(
            "¡Tu mensaje ha sido enviado al equipo de ángeles! Pronto recibirás una respuesta celestial."
          );
          setTimeout(() => setBackResponse(""), 5000);
        } else {
          setBackResponse(
            "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde."
          );
        }
      })
      .catch(() =>
        setBackResponse(
          "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde."
        )
      );
  };

  return (
    <form className="text-left" onSubmit={handleSubmit} noValidate>
      {backResponse ===
        "¡Tu mensaje ha sido enviado al equipo de ángeles! Pronto recibirás una respuesta celestial." && (
        <p className="mb-3 p-3 bg-verde-suave-10 text-verde-suave border-verde-suave border-[1.5px]">
          {backResponse}
        </p>
      )}
      {backResponse ===
        "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde." && (
        <p className="mb-3 p-3 bg-rojo-suave-10 text-rojo-suave border-rojo-suave border-[1.5px]">
          {backResponse}
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
        placeholder="correo@dominio.com"
        type="email"
        errorMessage={emailError}
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputText
        id="phone"
        label="Teléfono"
        placeholder="+57 3145679809"
        type="text"
        errorMessage={phoneError}
        value={phone}
        handleChange={(e) => setPhone(e.target.value)}
        required
      />
      <InputText
        id="message"
        label="Mensaje"
        placeholder="Este es un mensaje, ya que quiero comunicarme contigo para..."
        type="text"
        errorMessage={messageError}
        value={message}
        handleChange={(e) => setMessage(e.target.value)}
        required
      />
      <InputButton type="submit" text="Enviar" />
    </form>
  );
};
