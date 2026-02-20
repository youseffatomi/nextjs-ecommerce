export default function Box({
  color,
  children,
}: {
  color: "white" | "blue";
  children: React.ReactNode;
}) {
  return (
    <section
      className={`rounded-lg p-4 ${color == "blue" ? "bg-body" : "bg-white"}`}
    >
      {children}
    </section>
  );
}
// {title && (
//   <div className="relative flex w-full items-stretch justify-between">
//     <h2
//       className="bg-primary-main px-5 text-sm text-white sm:text-[16px] md:px-7 lg:px-10"
//       style={{ borderRadius: "0 0.375rem 0 50px", lineHeight: 3 }}
//     >
//       {title}
//     </h2>
//   </div>
// )}
