import { Action } from "../components/Action";
import { Typography } from "../components/Typography";
import HeroTitle from "../icons/HeroTitle.svg";

export const HeroLanding = () => (
  <section className="pt-[77px] md:pt-[80px] flex flex-col items-end md:flex-row justify-center md:items-center md:max-h-dvh overflow-hidden">
    <div className="flex flex-col gap-5 md:gap-10 justify-center items-start p-5 md:px-10 md:p-0">
      <Typography as="h1" variant="title" color="marron" customClasses="w-full" isHTML={true} content={`<img src="${HeroTitle}"/><span class="sr-only">Camila Gacha Ángeles</span>`}/>
      <Typography
        as="p"
        variant="body"
        color="marron"
        content="¿Estás preparado para recibir toda la magia celestial en tu vida? Tus
        Ángeles han estado aguardando este instante, cuando abres tu corazón y
        disfrutas de esta experiencia humana con su guía."
      />
      <Action
        as="a"
        color="gris"
        href="#CoursesSection"
        content="Explorar cursos"
        icon
      />
    </div>
    <img
      className="w-full md:order-first md:min-w-[50%] lg:max-w-[50%] lg:max-h-full h-full object-cover"
      src="/img/header-photo.jpg"
      alt="Camila Gacha sonriendo, con un vestido blanco sujetando florez en la mano"
    />
  </section>
);
