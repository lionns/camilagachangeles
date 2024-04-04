import type { ChangeEventHandler } from "react";

export const InputFile = ({
  id,
  label,
  handleChange,
}: {
  id: string;
  value?: File;
  label: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  classList?: string;
}) => {
  return (
    <div>
      <label
        className="block font-serif !font-semibold uppercase text-body-sm md:text-body-md"
        htmlFor={id}
      >
        {label}
      </label>
      <input type="file" id={id} name={id} onChange={handleChange} />
    </div>
  );
};
