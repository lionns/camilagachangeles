import { Typography } from "../components/Typography";
import Testimonios from "../assets/videos/video_comprimido.mp4";

export const TestimonyLanding = () => {
  return (
    <section id="TestimonySection" className="space-y-10">
      <Typography
        as="h2"
        variant="title"
        color="marron"
        content="Testimonios"
      />
      <video controls className="w-full object-cover max-h-[1000px] m-auto">
        <source src={Testimonios} type="video/mp4" />
        Tu navegador no soporta la etiqueta video
      </video>
    </section>
  );
};
