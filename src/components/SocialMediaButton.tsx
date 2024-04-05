import InstagramLogo from "../assets/imgs/instagram-logo.svg";
import WhatsappLogo from "../assets/imgs/whatsapp-logo.svg";
import TiktokLogo from "../assets/imgs/tiktok-logo.svg";

export const SocialMediaButton = ({
  url,
  image,
}: {
  url: string;
  image: "Instagram" | "WhatsApp" | "Tiktok";
}) => {
  const imageMap = {
    Instagram: InstagramLogo,
    WhatsApp: WhatsappLogo,
    Tiktok: TiktokLogo,
  };

  const SocialMediaIcon = imageMap[image];

  return (
    <a
      className="grid place-content-center w-12 h-12 bg-marron-profundo hover:bg-terracota-blush text-gris-suave rounded-full"
      href={url}
      target="_blank"
      aria-label="Social media icon"
    >
      {SocialMediaIcon && <img className="text-gris-suave" src={SocialMediaIcon} alt="Social media icon" />}
    </a>
  );
};
