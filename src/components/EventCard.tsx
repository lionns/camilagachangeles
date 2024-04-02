import { Event } from "../types/Event";
import { Action } from "./Action";
import { Typography } from "./Typography";

type EventCardProps = {
  event: Event;
};
export const EventCard = ({ event }: EventCardProps) => (
  <article
    className="bg-center bg-cover text-gris-suave"
    style={{ backgroundImage: `url('${event.image}')`, minHeight: "200px" }}
  >
    <div className="bg-gradient-to-t from-marron-profundo to-transparent p-5 flex flex-col justify-end items-center gap-5 min-h-[362px] text-center">
      <Typography
        as="h3"
        variant="subtitle"
        color="gris"
        content={`${event.name}`}
      />
      <div>
        <Typography
          as="p"
          variant="body"
          color="terracota"
          content={`${event.date}`}
        />
        <Typography
          as="p"
          variant="body"
          color="terracota"
          content={`${event.location}`}
        />
      </div>
    </div>
    <Action
      as="a"
      color="marron"
      customClasses="w-full border-0 text-terracota-blush !p-5"
      href={event.link}
      target="_blank"
      icon
      content="Quiero asistir"
    />
  </article>
);