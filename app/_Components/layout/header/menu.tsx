"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_Components/Form/Button";
import { useState } from "react";

type MENU = {
  name: string;
  link: string;
  isOpenSub?: boolean;
  sub?: MENU[];
};

export function MenuDesktop({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const List: MENU[] = [
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`animate__flipInX animate__animated animate__faster absolute top-full right-26 z-6 w-[200px] rounded-lg bg-white text-[15px] ${show ? "block" : "hidden"}`}
      >
        <ul>
          {List.map((L1, Li) => (
            <li key={Li} className="group relative">
              <Link
                className="hover:bg-primary-light block flex items-center justify-between px-3 py-3"
                href={L1.link}
              >
                {L1.name}
                <Image
                  src="/assets/images/arrow-down-solid.svg"
                  width={15}
                  height={15}
                  alt=""
                  className="rotate-90"
                />
              </Link>

              {L1.sub && (
                <ul className="animate__flipInY animate__animated animate__faster absolute top-0 right-full hidden w-[200px] overflow-hidden rounded-l-lg group-hover:block">
                  {L1.sub.map((L2, L2i) => (
                    <li key={L2i}>
                      <Link
                        className="bg-primary-main hover:bg-primary-dark block px-2 py-3 text-white"
                        href={L1.link}
                      >
                        {L1.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="absolute top-0 left-0 z-5 h-screen w-screen bg-[rgba(0,0,0,0.3)]"
        ></div>
      )}
    </>
  );
}

export function MenuMobile({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [List, setList] = useState<MENU[]>([
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
    {
      name: "لورم ایپسوم",
      link: "test",
      sub: [
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
        { name: "لورم ایپسوم", link: "test" },
      ],
    },
  ]);

  const ToggleSub = (index: number) => {
    setList((pre) => {
      return pre.map((L, i) => {
        if (index == i) L.isOpenSub = true;
        else L.isOpenSub = false;

        return L;
      });
    });
  };

  return (
    <>
      <nav
        className={`animate__fadeInRight animate__animated animate__faster h absolute top-0 right-0 z-10 h-screen w-[200px] rounded-lg bg-white text-[15px] ${show ? "block" : "hidden"}`}
      >
        <ul>
          {List.map((L1, Li) => (
            <li key={Li} className="group relative">
              <div className="hover:bg-primary-light block flex items-center justify-between px-3 py-3">
                <Link href={L1.link}>{L1.name}</Link>

                <button className="p-3" onClick={() => ToggleSub(Li)}>
                  <Image
                    src="/assets/images/arrow-down-solid.svg"
                    width={15}
                    height={15}
                    alt=""
                    className="rotate-90"
                  />
                </button>
              </div>

              {L1.sub && (
                <ul
                  className={`animate__flipInY animate__animated animate__faster absolute top-0 right-full ${!L1.isOpenSub && "hidden"} w-[200px] overflow-hidden rounded-l-lg`}
                >
                  {L1.sub.map((L2, L2i) => (
                    <li key={L2i}>
                      <Link
                        className="bg-primary-main hover:bg-primary-dark block px-2 py-3 text-white"
                        href={L1.link}
                      >
                        {L1.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {show && (
        <div
          onClick={() => {
            setList((pre) => pre.map((L) => ({ ...L, isOpenSub: false })));
            setShow(false);
          }}
          className="absolute top-0 left-0 z-5 h-screen w-screen bg-[rgba(0,0,0,0.3)]"
        ></div>
      )}
    </>
  );
}

// {
/* <ul>
  {List.map((L1, Li) => (
    <li key={Li}>
      <Link href={L1.link}>{L1.name}</Link>

      {L1.sub &&
        L1.sub.map((L2, L2i) => (
          <Link key={L2i} href={L1.link}>
            {L1.name}
          </Link>
        ))}
    </li>
  ))}
</ul>; */
// }
