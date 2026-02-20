import Link from "next/link";

export default function BoxSeeMore({
  color,
  children,
  title,
  href,
}: {
  title: string;
  color: "white" | "blue";
  children: React.ReactNode;
  href: string;
}) {
  return (
    <section
      className={`rounded-lg ${color == "blue" ? "bg-body" : "bg-white"}`}
    >
      {/* title */}
      <div className="relative flex w-full items-stretch justify-between">
        <h2
          className="bg-primary-main px-5 text-sm text-white sm:text-[16px] md:px-7 lg:px-10"
          style={{ borderRadius: "0 0.375rem 0 50px", lineHeight: 3 }}
        >
          {title}
        </h2>
        {/* see more btn */}
        <Link
          href={href}
          className="ml-5 flex w-[100px] items-center justify-between py-2 text-white sm:w-[140px] sm:py-1"
        >
          <span className="text-sm font-medium sm:text-[16px]">مشاهده همه</span>
          <i className="icon-arrow-left"></i>
        </Link>
      </div>
      {/* content */}
      <div className="z-10 rounded-md p-4">{children}</div>
    </section>
  );
}
