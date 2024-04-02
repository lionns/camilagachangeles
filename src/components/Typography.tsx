type TypographyOwnProps<E extends React.ElementType = React.ElementType> = {
  content: string;
  variant: keyof typeof variantClasses;
  color: keyof typeof colorClasses;
  as?: E;
  customClasses?: string;
  isHTML?: boolean;
};

const __DEFAULT_ELEMENT__ = "h2";

const variantClasses: { [key: string]: string } = {
  title: "font-serif font-bold text-h-sm md:text-h-md uppercase",
  subtitle: "font-serif font-normal text-sh-sm md:text-sh-md uppercase",
  body: "font-sans font-normal text-body-sm md:text-body-md",
};

const colorClasses = {
  terracota: "text-terracota-blush",
  marron: "text-marron-profundo",
  gris: "text-gris-suave",
};

export const Typography = <
  E extends React.ElementType = typeof __DEFAULT_ELEMENT__
>({
  content,
  variant,
  color,
  as,
  customClasses,
  isHTML,
  ...props
}: TypographyOwnProps<E>) => {
  const classes = `${variantClasses[variant as keyof typeof variantClasses]} ${
    colorClasses[color as keyof typeof colorClasses]
  } ${customClasses}`;

  const Component = as || __DEFAULT_ELEMENT__;

  return (
    <Component className={classes} {...props}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Component>
  );
};
