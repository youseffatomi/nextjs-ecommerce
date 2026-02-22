import Samandehi from "@/app/_assets/images/samandehi.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const data = {
    copyRight: "تمامی حقوق برای سایت فلکسو محفوظ است",
    address: "تست تست تست",
    phone: "091200000",
    cols: [
      {
        title: "تست تست",
        links: [
          { title: "تست تست", link: "" },
          { title: "تست تست", link: "" },
          { title: "تست تست", link: "" },
        ],
      },
      {
        title: "تست تست",
        links: [
          { title: "تست تست", link: "" },
          { title: "تست تست", link: "" },
          { title: "تست تست", link: "" },
        ],
      },
      {
        title: "تست تست",
        links: [
          { title: "تست تست", link: "" },
          { title: "تست تست", link: "" },
          { title: "تست تست", link: "" },
        ],
      },
    ],
  };

  return (
    <footer className="bg-primary-dark relative mt-20 pt-5 pb-5">
      <div className="">
        <div className="bg-body absolute top-0 left-1/2 mx-auto grid h-[55px] w-8/12 -translate-x-1/2 place-items-center text-center text-[13px] md:w-6/12 lg:w-5/12 xl:w-[600px]">
          <span>{data.copyRight}</span>
          <div className="absolute top-0 -right-[69px] h-[55px] w-[70px] rotate-y-180 bg-[url('/assets/images/footer.svg')] bg-cover bg-no-repeat"></div>
          <div className="absolute top-0 -left-[69px] h-[55px] w-[70px] bg-[url('/assets/images/footer.svg')] bg-cover bg-no-repeat"></div>
        </div>
      </div>

      <div className="container mx-auto mt-20 lg:mt-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-7 lg:gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-primary-main text-[40px] font-bold">
              <Image
                src="/assets/images/logo.svg"
                alt=""
                width={100}
                height={100}
              />
            </h1>

            <p className="mt-5 text-base font-medium text-white">آدرس</p>
            <div className="mt-3 flex flex-col gap-3 text-base text-white opacity-80">
              <p>{data.address}</p>

              <p>شماره تماس : {data.phone}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-center gap-7 md:grid-cols-3 lg:col-span-4 lg:mt-20">
            {data.cols.map((C, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h4 className="text-lg font-bold text-white">{C.title}</h4>
                {C.links.map((L, I) => (
                  <Link
                    href={L.link}
                    key={I}
                    className="text-base text-white opacity-80"
                  >
                    {L.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <div className="col-span-1 grid grid-cols-2 items-center gap-3 md:grid-cols-4 lg:grid-cols-2">
              <Image className="mx-auto" src={Samandehi} width="150" alt="" />
              <Image className="mx-auto" src={Samandehi} width="150" alt="" />
              <Image className="mx-auto" src={Samandehi} width="150" alt="" />
              <Image className="mx-auto" src={Samandehi} width="150" alt="" />
            </div>
          </div>
        </div>

        <div className="my-8 flex flex-wrap items-center justify-center gap-5 text-white md:my-3">
          <Link href="#">
            <i className="icon-Facebook"></i>
          </Link>
          <Link href="#">
            <i className="icon-Twitter"></i>
          </Link>
          <Link href="#">
            <i className="icon-Linkedin"></i>
          </Link>
          <Link href="#">
            <i className="icon-Instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
