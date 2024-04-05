import { useEffect, useState } from "react";
import { Typography } from "../components/Typography";
import { useAuth } from "../hooks/useAuth";
import { Footer } from "../sections/Footer";
import { User } from "../types/User";
import { DecodeInfoProps } from "../types/DecodeInfoProps";
import { jwtDecode } from "jwt-decode";
import { Header } from "../sections/Header";

export const PoliticaPrivacidad = () => {
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
    <div className="relative">
      <Header loading={loading} userInfo={userInfo} />
      <main className="mx-auto min-h-screen max-w-4xl px-5 pt-[93px] md:pt-[96px] space-y-5 pb-[317px] md:pb-[246px]">
        <Typography
          as="h1"
          variant="title"
          color="marron"
          content="Políticas de privacidad - Camila Gacha Ángeles"
        />
        <p className="font-sans text-body-sm md:text-body-md">
          Fecha de última actualización: <strong>29 de enero de 2024</strong>
        </p>
        <p className="font-sans text-body-sm md:text-body-md">
          Agradecemos tu confianza al utilizar Camila Gacha Angeles. La presente
          Política de Privacidad tiene como objetivo informarte sobre cómo
          recopilamos, utilizamos y protegemos la información personal que nos
          proporcionas al utilizar nuestro sitio web.
        </p>
        <ol className="space-y-10">
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Información que Recopilamos:</strong>
            <ul>
              <li>
                Recopilamos información personal, como nombres, direcciones de
                correo electrónico, y otra información relevante cuando la
                proporcionas voluntariamente al registrarte o interactuar con
                nuestro sitio.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Uso de la Información:</strong>
            <ul className="space-y-5">
              <li>
                Utilizamos la información recopilada para personalizar tu
                experiencia en Camila Gacha Angeles, brindarte contenido
                relevante y mejorar nuestros servicios.
              </li>
              <li>
                Podemos utilizar tu dirección de correo electrónico para
                enviarte actualizaciones, noticias y promociones relacionadas
                con nuestros servicios, pero siempre tendrás la opción de optar
                por no recibir estas comunicaciones.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Cookies y Tecnologías Similares:</strong>
            <ul className="space-y-5">
              <li>
                Utilizamos cookies y tecnologías similares para recopilar
                información sobre tu actividad en nuestro sitio. Estas
                tecnologías nos ayudan a mejorar la funcionalidad y la
                experiencia del usuario.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Compartir Información:</strong>
            <ul className="space-y-5">
              <li>
                No vendemos ni compartimos tu información personal con terceros
                sin tu consentimiento, excepto cuando sea necesario para
                proporcionar los servicios solicitados o cumplir con requisitos
                legales.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Seguridad de la Información:</strong>
            <ul className="space-y-5">
              <li>
                Implementamos medidas de seguridad para proteger la información
                personal contra accesos no autorizados, alteraciones,
                divulgaciones o destrucciones no autorizadas.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Acceso y Control de tu Información:</strong>
            <ul className="space-y-5">
              <li>
                Puedes acceder y actualizar tu información personal en cualquier
                momento a través de tu cuenta en Camila Gacha Angeles. También
                puedes solicitar la eliminación de tu cuenta y datos personales.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Enlaces a Terceros:</strong>
            <ul className="space-y-5">
              <li>
                Nuestro sitio puede contener enlaces a sitios web de terceros.
                No nos hacemos responsables de las prácticas de privacidad de
                estos sitios y te recomendamos revisar sus políticas de
                privacidad.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Niños Menores de 13 Años:</strong>
            <ul className="space-y-5">
              <li>
                No recopilamos intencionalmente información de niños menores de
                13 años. Si eres padre/madre y descubres que tu hijo/a nos ha
                proporcionado información personal, por favor contáctanos para
                que podamos eliminar dicha información.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Cambios en la Política de Privacidad:</strong>
            <ul className="space-y-5">
              <li>
                Nos reservamos el derecho de modificar esta Política de
                Privacidad en cualquier momento. Te recomendamos revisar
                periódicamente esta página para estar al tanto de cualquier
                cambio.
              </li>
            </ul>
          </li>
        </ol>
        <p className="font-sans text-body-sm md:text-body-md">
          Al utilizar Camila Gacha Angeles, aceptas los términos descritos en
          esta Política de Privacidad. Si no estás de acuerdo con alguna de
          estas condiciones, te recomendamos que no utilices nuestro sitio.
          Gracias por confiar en nosotros y disfrutar de Camila Gacha Angeles.
        </p>
      </main>
      <Footer />
    </div>
  );
};
