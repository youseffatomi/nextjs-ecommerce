import LayoutGlobal from "@/app/_Components/layout";
import "@/app/_scss/index.scss";
export default function layout({ children }: { children: React.ReactNode }) {
  return <LayoutGlobal>{children}</LayoutGlobal>;
}
