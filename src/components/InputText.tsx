import type { ChangeEventHandler } from "react";

export const InputText = ({
  id,
  type,
  value,
  label,
  handleChange,
  placeholder,
  errorMessage,
  classList,
  required,
}: {
  id: string;
  type: string;
  value: string;
  label: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  errorMessage?: string;
  classList?: string;
  required?: boolean;
}) => {
  const classes: string = `w-full px-4 py-3 border-2 border-marron-profundo bg-gris-suave focus:outline-none focus:border-terracota-blush focus:text-terracota-blush placeholder:text-marron-profundo-50 ${errorMessage && ("border-rojo-suave bg-rojo-suave-10")} ${classList}`;

  return (
    <div>
      <label
        className="block font-serif uppercase text-body-sm md:text-body-md"
        htmlFor={id}
      >
        {label} {required && <span className="text-rojo-suave">*</span>}
      </label>
      <input
        className={classes}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        required={required}
      />
      <p
        className={`min-h-6 text-rojo-suave ${
          errorMessage ? "opacity-1" : "opacity-0"
        }`}
      >
        {errorMessage}
      </p>
    </div>
  );
};
