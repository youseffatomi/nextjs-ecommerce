"use clint";
import Image from "next/image";
import { SetStateAction } from "react";
import Button from "@/app/_Components/Form/Button/index";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginRegisterModal({
  setOpenAuthModal,
}: {
  setOpenAuthModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  const FormikPhone = useFormik({
    initialValues: { username: "", password: "" },

    validationSchema: Yup.object({
      username: Yup.string().required("نام کاربری الزامی است"),
      password: Yup.string().required("کلمه عبور الزامی است"),
    }),
    validateOnChange: false,
    validateOnBlur: false,

    async onSubmit(values, { validateForm }) {
      validateForm(values);

      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (res?.error) {
        FormikPhone.errors.username = "نام کاربری اشتباه است";
        FormikPhone.errors.password = "رمز عبور اشتباه است";
      }

      if (res?.ok) {
        toast.success("با موفقیت وارد شدید");
      }
    },
  });

  return (
    <section className="absolute top-0 left-0 grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.3)]">
      <div className="login-register-modal-content show">
        <div className="bg-body relative w-[330px] rounded-xl p-6 pt-0 md:w-[380px]">
          <button
            className="bg-body absolute top-5 right-[20px] cursor-pointer rounded-full"
            onClick={() => setOpenAuthModal(false)}
          >
            <Image
              width={30}
              height={30}
              src="/assets/images/close-circle.svg"
              alt=""
            />
          </button>

          <button className="back-step bg-body border-body absolute top-[-10px] left-[20px] hidden rounded-full border-2 border-solid">
            <i className="icon-arrow-left-2 grid h-[23px] w-[23px] place-items-center rounded-full border-2 border-solid border-[#292D32] text-[13px] font-bold"></i>
          </button>

          <h1 className="grid place-items-center py-5">
            <Image
              src="/assets/images/logo.svg"
              alt=""
              width={100}
              height={100}
            />
          </h1>

          <div className="min-h-[300px] rounded-md bg-white p-4">
            <span className="mb-2 block text-base font-medium">
              ورود به flexo
            </span>

            <span className="mb-5 block text-sm">آسوده دیجیتال خرید کنید</span>

            <div className="inp-phone-number">
              <form className="step1" onSubmit={FormikPhone.handleSubmit}>
                <span className="block"> نام کاربری </span>
                <div className="border-stroke mt-2 flex items-center rounded-lg border-2 border-solid p-2">
                  <input
                    name="username"
                    onChange={FormikPhone.handleChange}
                    value={FormikPhone.values.username}
                    maxLength={11}
                    type="text"
                    className="inpPhoneNumber px-3 font-light"
                  />
                </div>
                <span className="danger-text my-3 text-sm text-red-500">
                  {FormikPhone.errors.username}
                </span>

                <span className="block"> رمز عبور </span>
                <div className="border-stroke mt-2 flex items-center rounded-lg border-2 border-solid p-2">
                  <input
                    name="password"
                    onChange={FormikPhone.handleChange}
                    value={FormikPhone.values.password}
                    maxLength={11}
                    type="text"
                    className="inpPhoneNumber px-3 font-light"
                  />
                </div>

                <span className="danger-text my-3 text-sm text-red-500">
                  {FormikPhone.errors.password}
                </span>

                <Button color="bg-primary-dark" className="mt-5 w-full">
                  ورود
                </Button>
              </form>

              <span className="mt-5 block text-sm">
                با ورود و یا ثبت نام در فلکسو شما
                <Link href="#" className="text-red-500">
                  شرایط و قوانین
                </Link>
                استفاده از سرویس های لومکس را می‌پذیرید.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
