import { useEffect, useState } from "react";
import { Typography } from "../components/Typography";
import { Event } from "../types/Event";
import { EventCard } from "../components/EventCard";

export const EventsLanding = () => {
  const EVENTS_URL = `http://localhost:8080/api/events`;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(EVENTS_URL)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section id="seccion-eventos" className="space-y-10">
      {events.length > 0 && (
        <>
          <Typography
            as="h2"
            variant="title"
            color="marron"
            content="Próximos eventos"
          />
          <div
            className={`grid gap-10 ${
              events.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {events.map((event: Event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
