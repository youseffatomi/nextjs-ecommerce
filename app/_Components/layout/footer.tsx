import Samandehi from "@/app/_assets/images/samandehi.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark relative mt-20 pt-5 pb-5">
      <div className="">
        <div className="bg-body absolute top-0 left-1/2 mx-auto grid h-[55px] w-8/12 -translate-x-1/2 place-items-center text-center text-[13px] md:w-6/12 lg:w-5/12 xl:w-[600px]">
          تمام حقوق این وبسایت متعلق به شرکت زرین فناوران میباشد
          <div className="absolute top-0 -right-[69px] h-[55px] w-[70px] rotate-y-180 bg-[url('/assets/images/footer.svg')] bg-cover bg-no-repeat"></div>
          <div className="absolute top-0 -left-[69px] h-[55px] w-[70px] bg-[url('/assets/images/footer.svg')] bg-cover bg-no-repeat"></div>
        </div>
      </div>

      <div className="container mx-auto mt-20 lg:mt-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-7 lg:gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-primary-main text-[40px] font-bold">لوگو</h1>

            <p className="mt-5 text-base font-medium text-white">آدرس</p>
            <div className="mt-3 flex flex-col gap-3 text-base text-white opacity-80">
              <p>شیراز - ملاصدرا - کوچه 9 - ساختمان پویا - واحد 4</p>
              <p>کد پستی : 777777777</p>
              <p>شماره تماس : 3636666-071</p>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-center gap-7 md:grid-cols-3 lg:col-span-4 lg:mt-20">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-white">مهم های فروشگاه</h4>
              <Link href="#" className="text-base text-white opacity-80">
                درباره ما
              </Link>
              <Link href="#" className="text-base text-white opacity-80">
                قوانین و مقررات
              </Link>
              <Link href="#" className="text-base text-white opacity-80">
                حریم خصوصی کاربران
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-white">پیش از خرید</h4>
              <Link href="#" className="text-base text-white opacity-80">
                راهنمای خرید
              </Link>
              <Link href="#" className="text-base text-white opacity-80">
                ضمانت 7 روزه ماا
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-white">پس از خرید</h4>
              <Link href="#" className="text-base text-white opacity-80">
                تضمین رجیستری
              </Link>
              <Link href="#" className="text-base text-white opacity-80">
                رویه بازگرداندن کالا
              </Link>
              <Link href="#" className="text-base text-white opacity-80">
                رهگیری آنلاین سفارشات
              </Link>
            </div>
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
