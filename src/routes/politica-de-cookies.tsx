import { Typography } from "../components/Typography";
import { Footer } from "../sections/Footer";

export const PoliticaCookies = () => {
  return (
    <div className="relative">
      <main className="mx-auto min-h-screen max-w-4xl px-5 pt-10 space-y-5 pb-[317px] md:pb-[246px]">
        <Typography
          as="h1"
          variant="title"
          color="marron"
          content="Políticas de cookies - Camila Gacha Ángeles"
        />
        <p className="font-sans text-body-sm md:text-body-md">
          Bienvenido/a al sitio web de Camila Gacha Angeles. Para ofrecerte la
          mejor experiencia posible, utilizamos cookies y tecnologías similares.
          Esta Política de Cookies explica cómo y por qué utilizamos estas
          tecnologías en nuestro sitio.
        </p>
        <ol className="space-y-10">
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>¿Qué son las cookies?</strong>
            <ul>
              <li>
                Las cookies son pequeños archivos de texto que se almacenan en
                tu dispositivo cuando visitas un sitio web. Estas cookies
                contienen información que se utiliza para mejorar tu experiencia
                de navegación, recordando tus preferencias y permitiendo ciertas
                funciones del sitio.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Tipos de cookies que utilizamos</strong>
            <ul className="space-y-5">
              <li>
                <strong>Cookies esenciales:</strong> Estas cookies son
                necesarias para el funcionamiento básico del sitio web. Nos
                ayudan a garantizar la seguridad y la integridad del sitio, así
                como a recordar tus preferencias de cookies.
              </li>
              <li>
                <strong>Cookies de rendimiento:</strong> Utilizamos cookies de
                rendimiento para recopilar información sobre cómo interactúas
                con nuestro sitio web. Esto nos ayuda a mejorar el rendimiento
                del sitio y a ofrecerte una experiencia más personalizada.
              </li>
              <li>
                <strong>Cookies de funcionalidad:</strong> Estas cookies
                permiten que el sitio recuerde tus preferencias y elecciones,
                como el idioma o la región, para proporcionarte una experiencia
                más personalizada.
              </li>
              <li>
                <strong> Cookies de marketing:</strong> Utilizamos cookies de
                marketing para mostrar anuncios relevantes para ti y tus
                intereses. Estas cookies también nos ayudan a medir la
                efectividad de nuestras campañas publicitarias.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Control de cookies</strong>
            <ul className="space-y-5">
              <li>
                Puedes controlar y gestionar las cookies en tu navegador. La
                mayoría de los navegadores te permiten bloquear o eliminar
                cookies de tu dispositivo. Sin embargo, ten en cuenta que
                hacerlo puede afectar la funcionalidad de nuestro sitio web.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Cambios en nuestra política de cookies</strong>
            <ul className="space-y-5">
              <li>
                Nos reservamos el derecho de realizar cambios en esta Política
                de Cookies en cualquier momento. Cualquier cambio significativo
                será notificado a través de nuestro sitio web.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Contacto</strong>
            <ul className="space-y-5">
              <li>
                Si tienes alguna pregunta sobre nuestra Política de Cookies, no
                dudes en ponerte en contacto con nosotros a través de{" "}
                <a
                  className="text-terracota-blush"
                  href="mailto:contacto@camilagachangeles.com"
                >
                  contacto@camilagachangeles.com
                </a>
              </li>
            </ul>
          </li>
        </ol>
        <p className="font-sans text-body-sm md:text-body-md">
          Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo
          con esta Política. Gracias por confiar en Camila Gacha Angeles.
        </p>
      </main>
      <Footer />
    </div>
  );
};
