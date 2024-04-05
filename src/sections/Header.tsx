import { Link } from "react-router-dom";
import LogoMarron from "../assets/imgs/logo-marron.svg";
import Dropdown from "../assets/imgs/dropdown.svg";
import Hamburger from "../assets/imgs/Hamburger.svg";
import { useEffect } from "react";
import { User } from "../types/User";
import ProfileIMG from "../assets/imgs/profile-img.png";
import { useAuth } from "../hooks/useAuth";
// import InstagramLogo from "../assets/imgs/instagram-logo.svg";
// import WhatsappLogo from "../assets/imgs/whatsapp-logo.svg";
// import TiktokLogo from "../assets/imgs/tiktok-logo.svg";

export const Header = ({
  loading,
  userInfo,
}: {
  loading: boolean | undefined;
  userInfo: User | null | undefined;
}) => {
  const { logout } = useAuth();

  const logoutLanding = async () => {
    await logout();
    window.location.reload();
  };

  const menuItems = [
    { label: "Eventos", href: "/#seccion-eventos" },
    {
      label: "Cursos",
      href: "/#seccion-cursos",
      subMenu: [
        { label: "Programas premium", href: "/#PremiumSection" },
        { label: "Talleres", href: "/#TalleresSection" },
      ],
    },
    { label: "Testimonios", href: "/#TestimonySection" },
    { label: "Acerca de", href: "/#AboutSection" },
    { label: "Contacto", href: "/#ContactSection" },
    {
      label: "Consultas",
      href: "#",
      subMenu: [
        { label: "Lectura de ángeles", href: "/" },
        { label: "Terapia individual", href: "/" },
      ],
    },
  ];

  function EventsMouseEnter(item: any) {
    item.style.backgroundColor = "rgba(43, 36, 27, 1)";
    item.children[0].style.color = "rgba(213, 204, 198, 1)";
    const submenu = item.querySelector("ul");
    if (submenu) {
      submenu.classList.remove("hidden");
    }
  }

  function EventsMouseLeave(item: any) {
    item.style.backgroundColor = "rgba(213, 204, 198, 1)";
    item.children[0].style.color = "rgba(43, 36, 27, 1)";
    const submenu = item.querySelector("ul");
    if (submenu) {
      submenu.classList.add("hidden");
    }
  }

  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuButton = document.getElementById("HambuergerButton");
    const linksMenuMobile = document.querySelectorAll("a#link-menu-mobile");
    const menuItemsDesktop = document.querySelectorAll(".group");
    const buttonsMenuMobile = document.querySelectorAll(".group-mobile");

    mobileMenu!.classList.add("hidden");

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        mobileMenu!.classList.add("hidden");
        mobileMenu!.classList.remove("flex");
        menuButton!.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 12H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 18H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
        menuButton!.classList.remove("menu-cerrado");
      }
    });

    linksMenuMobile.forEach((item) => {
      item.addEventListener("click", () => {
        mobileMenu!.classList.toggle("hidden");
        mobileMenu!.classList.toggle("flex");
        menuButton!.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 12H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 18H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
        menuButton!.classList.remove("menu-cerrado");
      });
    });

    menuButton!.addEventListener("click", function () {
      mobileMenu!.classList.toggle("hidden");
      mobileMenu!.classList.toggle("flex");

      if (!this.classList.contains("menu-cerrado")) {
        this.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="#2B241B" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" /><path d="M6 6L18 18" stroke="#2B241B" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" /></svg>`;
      } else {
        this.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 12H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 18H3" stroke="#2B241B" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
      }

      this.classList.toggle("menu-cerrado");

      buttonsMenuMobile.forEach((item) => {
        if (item.classList.contains("rotate-180")) {
          const ulBrother = item!.closest("li")!.querySelector("ul");
          item.classList.toggle("rotate-180");
          ulBrother!.classList.toggle("hidden");
        }
      });
    });

    menuItemsDesktop.forEach((item: any) => {
      item.addEventListener("mouseenter", EventsMouseEnter(item));
      item.addEventListener("mouseleave", EventsMouseLeave(item));
    });

    buttonsMenuMobile.forEach((item) => {
      item.addEventListener("click", function () {
        const ulBrother = item!.closest("li")!.querySelector("ul");
        if (ulBrother) {
          item.classList.toggle("rotate-180");
          ulBrother.classList.toggle("hidden");
        }
      });
    });
  }, []);

  return (
    <header className="w-full fixed bg-gris-suave z-50 min-w-[84px]">
      <nav className="flex justify-between p-5 items-center text-marron-profundo font-serif font-semibold">
        <Link to="/">
          <img src={LogoMarron} alt="" />
        </Link>
        <ul className="hidden xl:flex gap-2 justify-center items-center">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={(e) => EventsMouseEnter(e.currentTarget)}
              onMouseLeave={(e) => EventsMouseLeave(e.currentTarget)}
            >
              <a
                className="p-2 hover:bg-marron-profundo flex justify-center items-center gap-2 lowercase font-bold hover:text-gris-suave"
                href={item.href}
              >
                {item.label}{" "}
                {item.subMenu && (
                  <img
                    src={Dropdown}
                    aria-label="Botón para desplegar el menú"
                    aria-hidden="true"
                  />
                )}
              </a>
              {item.subMenu && (
                <ul className="hidden space-y-5 absolute bg-marron-profundo p-5">
                  {item.subMenu.map((submenu) => (
                    <li key={submenu.label}>
                      <a
                        className="whitespace-nowrap border-b-2 border-marron-profundo hover:border-gris-suave text-gris-suave lowercase"
                        href={submenu.href}
                      >
                        {submenu.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <span className="font-bold text-marron-profundo">|</span>
          <li className="relative">
            <a
              className="p-2 hover:bg-marron-profundo flex justify-center items-center gap-2 lowercase font-bold hover:text-gris-suave"
              href="/blog"
            >
              Blog
            </a>
          </li>
        </ul>
        {loading ? (
          <p>Cargando...</p>
        ) : userInfo != null && userInfo.id ? (
          <li
            className="relative list-none rounded-full"
            onMouseEnter={(e) => EventsMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => EventsMouseLeave(e.currentTarget)}
          >
            <button type="button" className="w-8 hidden xl:block">
              <img src={userInfo.image || ProfileIMG} alt="Imagen de perfil" />
            </button>
            <ul className="hidden space-y-5 absolute bg-marron-profundo p-5 right-0">
              <li>
                <a
                  className="whitespace-nowrap border-b-2 border-marron-profundo hover:border-gris-suave text-gris-suave lowercase"
                  href="/perfil"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a
                  className="whitespace-nowrap border-b-2 border-marron-profundo hover:border-gris-suave text-gris-suave lowercase"
                  href="/mis-cursos"
                >
                  Mis cursos
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="whitespace-nowrap border-b-2 border-marron-profundo hover:border-gris-suave text-gris-suave lowercase"
                  onClick={logoutLanding}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </li>
        ) : (
          <a
            className="hidden xl:block border-[1.5px] border-marron-profundo p-2 font-sans text-body-md hover:bg-marron-profundo hover:text-gris-suave"
            href="/inicio-de-sesion"
          >
            Iniciar sesión
          </a>
        )}
        <button id="HambuergerButton" type="button" className="xl:hidden">
          <img src={Hamburger} alt="Botón del menú" />
        </button>
      </nav>
      <div
        id="mobile-menu"
        className="hidden absolute flex-col gap-10 items-center xl:hidden w-full bg-gris-suave pb-10"
      >
        <ul className="flex flex-col gap-5 font-serif">
          {menuItems.map((item) => (
            <li key={item.label} className="relative">
              <div className="flex justify-center items-center">
                <a
                  id="link-menu-mobile"
                  className="p-2 flex justify-center items-center gap-2 font-bold uppercase text-[14px]"
                  href={item.href}
                >
                  {item.label}
                </a>
                {item.subMenu && (
                  <button className="group-mobile">
                    <img
                      src={Dropdown}
                      aria-label="Botón para desplegar el menú"
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
              {item.subMenu && (
                <ul className="hidden w-full space-y-5 p-5">
                  {item.subMenu.map((submenu) => (
                    <li key={submenu.label}>
                      <a
                        id="link-menu-mobile"
                        className="block text-center whitespace-nowrap"
                        href={submenu.href}
                      >
                        {submenu.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="relative">
            <a
              className="p-2 flex justify-center items-center gap-2 font-bold uppercase text-[14px]"
              href="/blog"
            >
              Blog
            </a>
          </li>
        </ul>
        <a
          className="block border-[1.5px] border-marron-profundo p-2 font-sans text-body-md hover:bg-marron-profundo hover:text-gris-suave"
          href="/inicio-de-sesion"
        >
          Iniciar sesión
        </a>
        {/* <div className="flex gap-5 py-10">
      <a
        className="text-marron-profundo"
        href="https://www.instagram.com/camilagacha_angeles/"
        target="_blank"
        aria-label="Instagram"><InstagramIcon /></a
      >
      <a
        className="text-marron-profundo"
        href="https://wa.me/573001457355"
        target="_blank"
        aria-label="WhatsApp"><WhatsAppIcon /></a
      >
      <a
        className="text-marron-profundo"
        href="https://www.tiktok.com/@camilagacha_angeles"
        target="_blank"
        aria-label="Tiktok"><TikTokIcon /></a
      >
    </div> */}
      </div>
    </header>
  );
};
