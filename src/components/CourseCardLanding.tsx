import { Course } from "../types/Course";
import { Action } from "./Action";
import { Typography } from "./Typography";

export const CourseCardLanding = ({ course }: { course: Course }) => {
  return (
    <article className="bg-marron-profundo text-gris-suave md:flex">
      <img
        className=" object-center object-cover md:w-1/2"
        src={course.image}
        alt={course.name}
      />
      <section className="md:w-1/2 flex flex-col gap-5 md:gap-10 p-5 md:p-10 items-start">
        <Typography
          as="h3"
          variant="subtitle"
          color="gris"
          content={course.name}
          customClasses="text-left"
        />
        <Typography
          as="p"
          variant="body"
          color="gris"
          content={course.description}
          customClasses="text-left"
        />
        <Action
          as="a"
          color="gris"
          content="Llévame allá"
          icon={true}
          customClasses="mt-auto"
        />
      </section>
    </article>
  );
};
