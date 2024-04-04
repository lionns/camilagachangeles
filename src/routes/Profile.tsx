import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { User } from "../types/User";
import { DecodeInfoProps } from "../types/DecodeInfoProps";
import { jwtDecode } from "jwt-decode";
import { Typography } from "../components/Typography";
import { ProfileForm } from "../forms/ProfileForm";

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
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, [userJWT]);

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 pt-16">
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
  );
};
