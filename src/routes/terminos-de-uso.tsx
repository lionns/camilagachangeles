import { Typography } from "../components/Typography";
import { Footer } from "../sections/Footer";

export const TerminosUso = () => {
  return (
    <div className="relative">
      <main className="mx-auto min-h-screen max-w-4xl px-5 pt-10 space-y-5 pb-[317px] md:pb-[246px]">
        <Typography
          as="h1"
          variant="title"
          color="marron"
          content="Términos de uso - Camila Gacha Ángeles"
        />
        <p className="font-sans text-body-sm md:text-body-md">
          Fecha de última actualización: <strong>20 de enero de 2024</strong>
        </p>
        <p className="font-sans text-body-sm md:text-body-md">
          Bienvenido/a a Camila Gacha Angeles. Antes de explorar nuestro sitio
          web, te pedimos que revises detenidamente nuestros términos de uso.
          Estos términos están diseñados para garantizar una experiencia segura,
          respetuosa y positiva para todos nuestros usuarios. Al acceder y
          utilizar este sitio, aceptas cumplir con estos términos.
        </p>
        <ol className="space-y-10">
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Contenido del Sitio:</strong>
            <ul>
              <li>
                El contenido proporcionado en Camila Gacha Angeles está
                destinado únicamente para fines informativos y de
                entretenimiento.
              </li>
              <li>
                Nos reservamos el derecho de modificar, eliminar o actualizar
                cualquier contenido sin previo aviso.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Registro y Cuentas de Usuario:</strong>
            <ul className="space-y-5">
              <li>
                Al crear una cuenta en Camila Gacha Angeles, te comprometes a
                proporcionar información precisa y actualizada.
              </li>
              <li>
                Es responsabilidad del usuario mantener la confidencialidad de
                su información de inicio de sesión y notificar cualquier
                actividad no autorizada de inmediato.
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
            <strong>Comportamiento del Usuario:</strong>
            <ul className="space-y-5">
              <li>
                Los usuarios deben comportarse de manera respetuosa y cortés
                hacia otros usuarios y el personal de Camila Gacha Angeles.
              </li>
              <li>
                No se tolerará el acoso, la discriminación, el lenguaje ofensivo
                o cualquier forma de comportamiento inapropiado.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Propiedad Intelectual:</strong>
            <ul className="space-y-5">
              <li>
                Todos los derechos de propiedad intelectual asociados con el
                contenido de Camila Gacha Angeles pertenecen a la plataforma. No
                está permitido copiar, distribuir o utilizar dicho contenido sin
                autorización.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Enlaces a Terceros:</strong>
            <ul className="space-y-5">
              <li>
                Camila Gacha Angeles puede contener enlaces a sitios web de
                terceros. No nos responsabilizamos por el contenido o las
                políticas de privacidad de estos sitios.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Privacidad:</strong>
            <ul className="space-y-5">
              <li>
                La información recopilada a través de Camila Gacha Angeles se
                maneja de acuerdo con nuestra Política de Privacidad. Te
                recomendamos revisar esta política para entender cómo manejamos
                tus datos.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Seguridad:</strong>
            <ul className="space-y-5">
              <li>
                No intentes eludir o dañar la seguridad de Camila Gacha Angeles.
                Cualquier actividad que amenace la integridad del sitio será
                tomada en serio y puede resultar en acciones legales.
              </li>
            </ul>
          </li>
          <li className="font-sans text-body-sm md:text-body-md">
            <strong>Cambios en los Términos:</strong>
            <ul className="space-y-5">
              <li>
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Te recomendamos revisar periódicamente esta
                página para estar al tanto de cualquier cambio.
              </li>
            </ul>
          </li>
        </ol>
        <p className="font-sans text-body-sm md:text-body-md">
          Al utilizar Camila Gacha Angeles, aceptas cumplir con estas políticas
          de uso. Si no estás de acuerdo con alguna de estas condiciones, te
          pedimos que te abstengas de utilizar nuestro sitio. Gracias por ser
          parte de nuestra comunidad. ¡Disfruta de tu experiencia en Camila
          Gacha Angeles!
        </p>
      </main>
      <Footer />
    </div>
  );
};
