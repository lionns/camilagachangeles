import { EventsLanding } from "../sections/EventsLanding";
import { HeroLanding } from "../sections/HeroLanding";

export const Landing = () => {
  return (
    <>
      <HeroLanding />
      <main className="mx-auto min-h-screen max-w-6xl px-5 pt-16 text-center">
        <EventsLanding />
      </main>
    </>
  );
};