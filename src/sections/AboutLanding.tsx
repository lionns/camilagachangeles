import { Typography } from "../components/Typography";
import FotoAcerca from "../assets/imgs/Foto Acerca de.jpg";
import { SocialMediaButton } from "../components/SocialMediaButton";

export const AboutLanding = () => {
  return (
    <section id="AboutSection" className="space-y-10">
      <Typography as="h2" variant="title" color="marron" content="Acerca de" />
      <div className="flex flex-col gap-10 md:flex-row items-center">
        <img
          className="md:w-1/2"
          src={FotoAcerca}
          alt="Camila Gacha en la nieve con un vestido rojo"
        />
        <div className="md:w-1/2 flex flex-col gap-10 items-center">
          <Typography
            as="p"
            variant="body"
            color="marron"
            content="La vida es un antes y un después cuando te conectas con la luz
            infinita de los Guías Espirituales. Ellos están acá para ayudarte en
            todos los sentidos y en todas las áreas de tu existencia. En este
            espacio aprenderás todo sobre esta sagrada conexión."
            customClasses="text-left"
          />
          <div className="flex gap-5 md:self-start">
            <SocialMediaButton
              url="https://www.instagram.com/camilagacha_angeles/"
              image="Instagram"
            />
            <SocialMediaButton
              url="https://api.whatsapp.com/message/JXO6SJ4J7FHWK1"
              image="WhatsApp"
            />
            <SocialMediaButton
              url="https://www.tiktok.com/@camilagacha_angeles"
              image="Tiktok"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
