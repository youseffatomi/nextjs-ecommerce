import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type BTN = {
  size?: "small" | "main" | "larg";
  color?: "bg-primary-light" | "bg-primary-dark";
  customColor?: string;
  children: React.ReactNode;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  size = "small",
  color = "bg-primary-light",
  children,
  className,
  customColor = "",
  ...props
}: BTN) {
  const baseClass =
    "px-3 transition-all duration-300  gap-2 flex items-center justify-center  text-white shadow-neomorphism-top-left inline-block rounded-[6px] px-3 py-2 text-center cursor-pointer  ";

  let SizeClass: string;
  switch (size) {
    case "small":
      SizeClass = "rounded-[4px] text-sm  py-2 px-3";
      break;
    case "main":
      SizeClass = "rounded-[6px]  text-[14px]  py-3 ";
      break;
    case "larg":
      SizeClass = "rounded-[8px] gap-2 text-lg   py-2";
      break;
  }

  return (
    <button
      {...{ ...props }}
      className={` ${baseClass} ${className} ${customColor} ${color} ${color == "bg-primary-dark" ? "hover:bg-primary-light" : "hover:bg-primary-dark"} ${SizeClass}`}
    >
      {children}
    </button>
  );
}
