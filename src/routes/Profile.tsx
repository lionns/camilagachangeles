import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { User } from "../types/User";
import { DecodeInfoProps } from "../types/DecodeInfoProps";
import { jwtDecode } from "jwt-decode";
import { Typography } from "../components/Typography";
import { ProfileForm } from "../forms/ProfileForm";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

export const Profile = () => {
  const { userJWT } = useAuth();
  const [userInfo, setUserInfo] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
  }, [userJWT]);

  return (
    <div className="relative">
    <Header loading={loading} userInfo={userInfo} />
    <main className="mx-auto min-h-screen max-w-4xl px-5 pt-[93px] md:pt-[96px] pb-[317px] md:pb-[246px]">
      <Typography
        as="h1"
        variant="title"
        color="marron"
        content="Perfil"
        customClasses="text-center"
      />
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : (
        <ProfileForm userInfo={userInfo} />
      )}
    </main>
    <Footer />
    </div>
  );
};
