export const PasswordRules = () => (
  <section className="border rounded-sm border-verde-suave bg-verde-suave-10 p-5 font-sans text-body-sm md:text-body-md text-verde-suave">
    <ul>
      <li>Debe contener al menos una letra minúscula.</li>
      <li>Debe contener al menos una letra mayúscula.</li>
      <li>Debe contener al menos un dígito.</li>
      <li>Debe contener al menos un carácter especial entre [@$!%*?&].</li>
      <li>Longitud mínima de 12 caracteres.</li>
    </ul>
  </section>
);
