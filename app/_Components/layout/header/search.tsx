import Image from "next/image";

export default function Search() {
  return (
    <div className="bg-primary-dark absolute top-[100%] left-[50%] grid h-[55px] w-8/12 translate-x-[-50%] place-items-center md:w-6/12 lg:w-5/12 xl:w-[600px]">
      <div className="flex w-full items-center justify-between overflow-hidden rounded-[4px] bg-white px-5">
        <button>
          <Image
            src="/assets/images/search-status.svg"
            alt=""
            width={30}
            height={30}
            className="ml-2 min-w-[25px] lg:min-w-[30px]"
          />
        </button>
        <input
          type="text"
          placeholder="جستجو در ..."
          className="placeholder:text-dark flex-grow py-2 text-sm lg:text-[15px]"
        />
      </div>

      <div className="absolute top-0 -right-[69px] h-[55px] w-[70px] rotate-y-180 bg-[url('/assets/images/Left-Header.svg')] bg-cover bg-no-repeat"></div>

      <div className="absolute top-0 -left-[69px] h-[55px] w-[70px] bg-[url('/assets/images/Left-Header.svg')] bg-cover bg-no-repeat"></div>
    </div>
  );
}
