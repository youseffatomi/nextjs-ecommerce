"use client";
import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import { MenuDesktop, MenuMobile } from "./menu";
import LoginRegisterModal from "./login-register-modal";
import MenuIcon from "@/app/_assets/images/menu.svg";
import ShoppingCart from "@/app/_assets/images/shopping-cart.svg";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

export default function Header() {
  const MoreLinks = [
    { label: "گوشی موبایل", href: "#" },
    { label: "لپتاپ", href: "#" },
    { label: "تبلت", href: "#" },
    { label: "هدفون و هندزفری", href: "#" },
    { label: "صوتی و تصویری", href: "#" },
    { label: "ساعت هوشمند", href: "#" },
    { label: "لوازم بازی", href: "#" },
    { label: "لوازم جانبی", href: "#" },
  ];
  const Router = useRouter();
  const Session = useSession();

  const [ShowDesktopMenu, setShowDesktopMenu] = useState(false);
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-[20] w-full">
      <section className="bg-primary-dark relative z-10 w-full py-2">
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-between gap-1">
            <div className="w-[100px] md:order-3 md:mr-5 md:w-[180px] md:flex-grow xl:flex-grow-0">
              {/* open mobile menu */}
              <button
                className="btn-open-mobile-menu flex items-center gap-2 xl:hidden"
                onClick={() => setShowMobileMenu((pre) => !pre)}
              >
                <Image width={30} src={MenuIcon} alt="منو" />
                <span className="hidden font-bold text-white md:block">
                  دسته بندی کالا ها
                </span>
              </button>
              {/* open desktop menu  */}
              <button
                className="btn-open-desktop-menu hidden items-center gap-2 xl:flex"
                onClick={() => setShowDesktopMenu((pre) => !pre)}
              >
                <Image width={30} src={MenuIcon} alt="منو" />
                <span className="hidden font-bold text-white md:block">
                  دسته بندی کالا ها
                </span>
              </button>
            </div>

            <div className="flex-grow md:flex-grow-0">
              <h1 className="text-primary-main grid place-items-center text-3xl font-bold">
                <Image
                  src="/assets/images/logo.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </h1>
            </div>

            <div className="order-3 hidden flex-grow px-4 xl:block">
              <ul className="flex items-center justify-center gap-3">
                {MoreLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-primary text-[15px] text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-[90px] items-center justify-center gap-4 md:order-3 md:w-[250px]">
              <Link href="#">
                <Image src={ShoppingCart} alt="shoping-card" width={30} />
              </Link>

              <button
                disabled={!Session.data}
                onClick={() => {
                  if (Session.status == "authenticated") Router.push("panel");
                  else setOpenAuthModal(true);
                }}
              >
                {Session.status != "loading" ? (
                  <Image
                    src={"/assets/images/profile-circle.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />
                ) : (
                  <BeatLoader size={7} color="#fff" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Search />
      </section>
      <MenuDesktop show={ShowDesktopMenu} setShow={setShowDesktopMenu} />
      <MenuMobile show={ShowMobileMenu} setShow={setShowMobileMenu} />
      {Session.status == "unauthenticated" && openAuthModal && (
        <LoginRegisterModal {...{ setOpenAuthModal }} />
      )}
    </header>
  );
}
