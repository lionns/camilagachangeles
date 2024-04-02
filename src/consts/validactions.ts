export const validateText = (text: string): string => {
  // Expresión regular para validar texto
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ()\-\/\s]+$/;

  if (!text.trim()) {
    return "El campo de texto es obligatorio.";
  }

  if (!regex.test(text)) {
    return "El campo de texto contiene caracteres no permitidos.";
  }

  return ""; // Devuelve una cadena vacía si no se encontraron errores
};

export const validateURL = (url: string): string => {
  // Expresión regular para validar una URL
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;

  if (!url.trim()) {
    return "La URL es obligatoria.";
  }

  if (!regex.test(url)) {
    return "La URL no es válida.";
  }

  return ""; // Devuelve una cadena vacía si no se encontraron errores
};

export const validateEmail = (email: string): string => {
  // Expresión regular para validar un email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    return "El correo electrónico es obligatorio.";
  }

  if (!regex.test(email)) {
    return "El correo electrónico no es válido.";
  }

  return ""; // Devuelve una cadena vacía si no se encontraron errores
};

export const validatePassword = (password: string): string => {
  // Validar si la contraseña tiene al menos 8 caracteres
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  // Expresión regular para validar la contraseña
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>?]).{8,}$/;

  if (!regex.test(password)) {
    return "La contraseña debe contener al menos una letra mayúscula, una minúscula, un dígito y un carácter especial.";
  }

  return ""; // Devuelve una cadena vacía si no se encontraron errores
};

export const validateTextNumber = (text: string): string => {
  // Expresión regular para validar texto con números y caracteres especiales
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ(),\/\-\.\s0-9]+$/;

  if (!text.trim()) {
    return "El campo de texto es obligatorio.";
  }

  if (!regex.test(text)) {
    return "El campo de texto solo puede contener letras, números y los siguientes caracteres especiales: ( ) , / - .";
  }

  return ""; // Devuelve una cadena vacía si no se encontraron errores
};
