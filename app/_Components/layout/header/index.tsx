"use client";
import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import MobileMenu from "./mobile-menu";
import LoginRegisterModal from "./login-register-modal";
import Menu from "@/app/_assets/images/menu.svg";
import ShoppingCart from "@/app/_assets/images/shopping-cart.svg";
import Scale2 from "@/app/_assets/images/scale 2.svg";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  console.log(Session);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-[20] w-full">
      <nav className="bg-primary-dark relative w-full py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-1">
            <div className="w-[30px] md:order-3 md:mr-5 md:w-[180px] md:flex-grow xl:flex-grow-0">
              {/* open mobile menu */}
              <button className="btn-open-mobile-menu flex items-center gap-2 lg:hidden">
                <Image width={30} src={Menu} alt="منو" />
                <span className="hidden font-bold text-white md:block">
                  دسته بندی کالا ها
                </span>
              </button>
              {/* open desktop menu  */}
              <button className="btn-open-desktop-menu hidden items-center gap-2 lg:flex">
                <Image width={30} src={Menu} alt="منو" />
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

            <div className="flex w-[70px] items-center gap-6 md:order-3 md:w-[250px]">
              <Link href="#">
                <Image src={ShoppingCart} alt="shoping-card" width={30} />
              </Link>
              <Link href="#">
                <Image src={Scale2} alt="shoping-card" width={30} />
              </Link>
              <button
                onClick={() => {
                  if (Session.status == "authenticated") Router.push("panel");
                  else setOpenAuthModal(true);
                }}
                className="hover:bg-primary-main hidden cursor-pointer items-center rounded-md bg-white px-5 py-2 transition-all duration-300 hover:text-white md:flex"
              >
                <i className="icon-user"></i>
                <span className="text-lg">
                  {Session.status == "unauthenticated" ? "ورود" : "حساب کاربری"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <Search />
        <MobileMenu />
      </nav>
      {Session.status == "unauthenticated" && openAuthModal && (
        <LoginRegisterModal {...{ setOpenAuthModal }} />
      )}
    </header>
  );
}
