import { useEffect, useState } from "react";
import { Course } from "../types/Course";
import { Typography } from "../components/Typography";
import { CourseCardLanding } from "../components/CourseCardLanding";

export const CoursesLanding = () => {
  const COURSES_URL = `http://localhost:8080/api/courses`;
  const [premiumCourses, setPremiumCourses] = useState<Course[]>([]);
  const [tallerCourses, setTallerCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch(COURSES_URL)
      .then((res) => res.json())
      .then((data: any) => {
        setPremiumCourses(
          data.filter((course: Course) => course.type === "PREMIUM")
        );
        setTallerCourses(
          data.filter((course: Course) => course.type === "TALLER")
        );
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section id="seccion-cursos" className="space-y-10">
      {premiumCourses.length > 0 || tallerCourses.length > 0 ? (
        <Typography
          as="h2"
          variant="title"
          color="marron"
          content="Talleres y cursos"
        />
      ) : (
        ""
      )}
      {premiumCourses.length > 0 && (
        <>
          <Typography
            as="h2"
            variant="subtitle"
            color="marron"
            content="Programas premium"
            customClasses="text-left"
          />
          {premiumCourses.map((course) => (
            <CourseCardLanding key={course.name} course={course} />
          ))}
        </>
      )}
      {tallerCourses.length > 0 && (
        <>
          <Typography
            as="h2"
            variant="subtitle"
            color="marron"
            content="Talleres"
            customClasses="text-left"
          />
          {tallerCourses.map((course) => (
            <CourseCardLanding key={course.name} course={course} />
          ))}
        </>
      )}
    </section>
  );
};
