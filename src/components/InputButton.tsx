export const InputButton = ({
  type,
  text,
  classList,
}: {
  type: "submit" | "reset" | "button";
  text: string;
  classList?: string;
}) => {
  const classes: string = `w-full px-4 py-3 border-2 border-marron-profundo bg-marron-profundo font-serif font-semibold uppercase text-gris-suave hover:bg-terracota-blush hover:text-marron-profundo ${classList}`;
  return (
    <button className={classes} type={type}>
      {text}
    </button>
  );
};
