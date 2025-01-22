"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-auto md:h-[90vh] bg-gradient-to-b from-[#F9FDFF] to-[#EEF9FF] py-24 md:py-12">
      <div className="items-center justify-between h-full flex md:flex-row px-8 flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-1 items-start flex-col gap-6">
          <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold text-lg md:text-xl capitalize">
              Professional Care, Local Heart
            </p>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl text-start capitalize ">
            Every need for your beloved pet
          </h1>
          <p className="pt-4 text-lg md:text-xl w-auto md:w-[42ch] font-semibold">
            Focused on quality and reliability, Embark delivers a comprehensive
            suite of services across its network
          </p>
          <div className="hidden md:block">
            <Image
              src="/3-paws.png"
              alt="Embark Services"
              height={60}
              className="mt-24"
              width={58}
            />
          </div>
        </div>

        <div className="flex-1 mt-16 md:mt-0 flex items-end justify-end">
          <Image
            src="/about-hero.png"
            height={624}
            width={624}
            alt="Dog bathing"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
