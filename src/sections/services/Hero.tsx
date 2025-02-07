"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-gradient-to-b from-[#F9FDFF] relative to-[#EEF9FF]  pt-12 pb-36">
        <div className="absolute top-24 right-[10vw]">
          <Image
            src="/blue-circles.png"
            alt="Blue Circles"
            height={40}
            width={50}
          />
        </div>
        <div className="items-start justify-center flex  px-8 flex-col max-w-screen-2xl  py-12 mx-auto">
          <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold text-xl capitalize">
              Professional Care, Local Heart
            </p>
          </div>
          <h1 className="hero-title mt-8 tracking-tighter  capitalize">
            Every need for your beloved pet
          </h1>
          <p className="pt-6 text-lg md:text-xl text-start w-auto md:w-[54ch]">
            Focused on quality and reliability, Embark delivers a comprehensive
            suite of services across its network
          </p>
          <div className="relative mt-10 w-full">
            <div className="relative">
              <div className="w-full relative h-[80vh]">
                <Image
                  src="/service-2.png"
                  fill
                  alt="Embark's Services"
                  className="rounded-2xl object-cover border border-[#183453]"
                  sizes="100vw"
                />
              </div>
            </div>
            <Image
              className="absolute bottom-[-60px] left-[-60px]"
              src="/badge-white.png"
              alt="Embark sticker"
              height={170}
              width={170}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
