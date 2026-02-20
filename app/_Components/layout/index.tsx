import Footer from "./footer";
import Header from "./header";

export default function LayoutGlobal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />

        <main className="container mx-auto min-h-screen">
          <div className="white-box">
            <div className="white-box-content pt-[130px]">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
