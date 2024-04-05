import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AboutLanding } from "../sections/AboutLanding";
import { ContactLanding } from "../sections/ContactLanding";
import { CoursesLanding } from "../sections/CoursesLanding";
import { EventsLanding } from "../sections/EventsLanding";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { HeroLanding } from "../sections/HeroLanding";
import { TestimonyLanding } from "../sections/TestimonyLanding";
import { User } from "../types/User";
import { DecodeInfoProps } from "../types/DecodeInfoProps";
import { jwtDecode } from "jwt-decode";

export const Landing = () => {
  const { userJWT } = useAuth();
  const [userInfo, setUserInfo] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    if (userJWT !== null) {
      const decode: DecodeInfoProps = jwtDecode(userJWT);
      const userId: number = decode.idUser;

      setLoading(true);

      fetch(`http://localhost:8080/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [userJWT]);

  return (
    <div className="relative scroll-smooth focus:scroll-auto">
      <Header loading={loading} userInfo={userInfo} />
      <HeroLanding />
      <main className="mx-auto space-y-10 min-h-screen max-w-6xl px-5 pt-16 text-center pb-[317px] md:pb-[246px]">
        <EventsLanding />
        <CoursesLanding />
        <TestimonyLanding />
        <AboutLanding />
        <ContactLanding />
      </main>
      <Footer />
    </div>
  );
};
