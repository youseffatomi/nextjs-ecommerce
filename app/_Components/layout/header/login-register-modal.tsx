export default function LoginRegisterModal() {
  return (
    <section className="login-register-modal absolute top-0 left-0 hidden h-screen w-screen place-items-center bg-[rgba(0,0,0,0.3)]">
      <div className="login-register-modal-content show">
        <div className="bg-body relative w-[330px] rounded-xl p-6 pt-0 md:w-[380px]">
          <button className="close-modal bg-body absolute top-[-10px] right-[20px] rounded-full">
            <img width="25px" src="/assets/images/icons/close-circle.svg" />
          </button>

          <button className="back-step bg-body border-body absolute top-[-10px] left-[20px] hidden rounded-full border-2 border-solid">
            <i className="icon-arrow-left-2 grid h-[23px] w-[23px] place-items-center rounded-full border-2 border-solid border-[#292D32] text-[13px] font-bold"></i>
          </button>

          <h1 className="py-5 text-center text-3xl font-bold">لوگــــــو</h1>

          <div className="modal-content min-h-[300px] rounded-md bg-white p-4">
            <span className="mb-2 block text-base font-medium">
              ورود و ثبت نام به لومکس
            </span>

            <span className="mb-5 block text-sm">آسوده دیجیتال خرید کنید</span>

            <div className="inp-phone-number">
              <span className="block"> شماره تماس </span>
              <div className="step1">
                <div className="border-stroke mt-2 flex items-center rounded-lg border-2 border-solid p-2">
                  <i className="icon-mobile"></i>
                  <input
                    maxLength={11}
                    type="text"
                    className="inpPhoneNumber px-3 font-light"
                  />
                </div>

                <span className="danger-text my-3 hidden text-sm text-red-500">
                  لطفا شماره موبایل را صحیح وارد کنید
                </span>

                <button className="sendCode btn-hover btn-main bg-primary-dark mt-5 w-full text-white">
                  تایید شماره
                </button>
              </div>

              <div className="step2 hidden">
                <div className="border-stroke mt-2 flex items-center rounded-lg border-2 border-solid p-2">
                  <i className="icon-mobile"></i>
                  <input type="text" className="pin" maxLength={6} autoFocus />
                </div>

                <div className="text-gray mt-4 flex items-center justify-between text-sm">
                  <span> کد ارسال شده را وارد کنید </span>
                  <span> ارسال مجدد (1:12 ثانیه) </span>
                </div>

                <span className="danger-text my-3 hidden text-sm text-red-500">
                  لطفا شماره موبایل را صحیح وارد کنید
                </span>

                <button className="submitCode bg-primary-dark btn-main mt-5 w-full text-white">
                  تایید شماره
                </button>
              </div>

              <span className="mt-5 block text-sm">
                با ورود و یا ثبت نام در لومکس شما
                <a href="#" className="text-red-500">
                  {" "}
                  شرایط و قوانین{" "}
                </a>
                استفاده از سرویس های لومکس را می‌پذیرید.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
