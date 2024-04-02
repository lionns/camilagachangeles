import { useCallback, useState, type ChangeEvent } from "react";
import { InputText } from "../components/InputText";
import { InputFile } from "../components/InputFile";
import { InputButton } from "../components/InputButton";
import { validateTextNumber, validateURL } from "../consts/validactions";

export const EventsForm = () => {
  const [image, setImage] = useState<File>();
  const [date, setDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  // const [imageError, setImageError] = useState<string>("");
  const [dateError, setDateError] = useState<string>("");
  const [locationError, setLocationError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [linkError, setLinkError] = useState<string>("");
  const [fetchError, setFetchError] = useState<string>("");

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

    // Realizar validaciones
    const nameValidation = validateTextNumber(name);
    const dateValidation = validateTextNumber(date);
    const locationValidation = validateTextNumber(location);
    const linkValidation = validateURL(link);

    // Actualizar los estados de error
    setNameError(nameValidation);
    setDateError(dateValidation);
    setLocationError(locationValidation);
    setLinkError(linkValidation);

    // Verificar si hay errores
    if (
      nameValidation !== "" ||
      dateValidation !== "" ||
      locationValidation !== "" ||
      linkValidation !== ""
    ) {
      return false; // No hagas el Fetch si hay errores
    }

    // Si no hay errores, continuar con la lógica para enviar el formulario
    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch("/api/eventos.json", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.message === "Missing fields") {
      setFetchError(
        "Ocurrio un error al intentar registrar el evento, por favor intentelo más tarde. Si es necesario, contacte al administrado."
      );
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit} noValidate>
      <InputText
        id="name"
        label="Título del evento"
        placeholder="Título del evento"
        type="text"
        errorMessage={nameError}
        value={name}
        handleChange={(e) => setName(e.target.value)}
        required
      />
      <InputText
        id="date"
        label="Fecha del evento"
        placeholder="25 de Enero - 28 de Enero"
        type="text"
        errorMessage={dateError}
        value={date}
        handleChange={(e) => setDate(e.target.value)}
        required
      />
      <InputText
        id="location"
        label="Lugar del evento"
        placeholder="Cali, Colombia"
        type="text"
        errorMessage={locationError}
        value={location}
        handleChange={(e) => setLocation(e.target.value)}
        required
      />
      <InputText
        id="link"
        label="Link redirección a WhatsApp"
        placeholder="https://api.whatsapp.com/message/"
        type="text"
        errorMessage={linkError}
        value={link}
        handleChange={(e) => setLink(e.target.value)}
        required
      />
      <InputFile
        id="image"
        label="Portada:"
        value={image}
        handleChange={handleFileChange}
      />
      {fetchError && (
        <p className="px-4 py-3 bg-rojo-suave-10 text-rojo-suave">
          {fetchError}
        </p>
      )}
      <InputButton type="submit" text="Crear evento" />
    </form>
  );
};
