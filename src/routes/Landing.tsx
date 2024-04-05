import { AboutLanding } from "../sections/AboutLanding";
import { CoursesLanding } from "../sections/CoursesLanding";
import { EventsLanding } from "../sections/EventsLanding";
import { Footer } from "../sections/Footer";
import { HeroLanding } from "../sections/HeroLanding";
import { TestimonyLanding } from "../sections/TestimonyLanding";

export const Landing = () => {
  return (
    <div className="relative">
      <HeroLanding />
      <main className="mx-auto space-y-10 min-h-screen max-w-6xl px-5 pt-16 text-center pb-[317px] md:pb-[246px]">
        <EventsLanding />
        <CoursesLanding />
        <TestimonyLanding />
        <AboutLanding />
      </main>
      <Footer />
    </div>
  );
};
