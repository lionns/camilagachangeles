import { Arrow } from "../icons/Arrow";

type ActionOwnProps<E extends React.ElementType = React.ElementType> = {
  content: string;
  color: keyof typeof colorClasses;
  as?: E;
  customClasses?: string;
  icon?: boolean;
};

type ActionProps<E extends React.ElementType> = ActionOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ActionOwnProps>;

const __DEFAULT_ELEMENT__ = "button";

const colorClasses = {
  terracota: "bg-terracota-blush",
  marron:
    "bg-marron-profundo text-gris-suave hover:bg-terracota-blush hover:text-marron-profundo border-2 border-marron-profundo hover:border-terracota-blush",
  gris: "bg-gris-suave text-marron-profundo hover:bg-marron-profundo hover:text-gris-suave border-2 border-marron-profundo",
};

export const Action = <
  E extends React.ElementType = typeof __DEFAULT_ELEMENT__
>({
  content,
  color,
  as,
  customClasses,
  icon,
  ...props
}: ActionProps<E>) => {
  const Component = as || __DEFAULT_ELEMENT__;

  const classes = `inline-block cursor-pointer px-3 py-3.5 font-serif uppercase text-[14px] font-bold tracking-wider ${
    icon && "flex justify-center items-center gap-2"
  } ${colorClasses[color as keyof typeof colorClasses]} ${customClasses}`;

  return (
    <Component className={classes} {...props}>
      {content} {icon ? <Arrow /> : ""}
    </Component>
  );
};
