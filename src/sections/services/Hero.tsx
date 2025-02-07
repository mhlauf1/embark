import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-gradient-to-b from-[#F9FDFF] relative to-[#EEF9FF] pt-6 md:pt-12 pb-24 md:pb-36">
        <div className="absolute top-4 -z-1 right-4 md:top-24 md:right-[10vw]">
          <Image
            src="/blue-circles.png"
            alt="Blue Circles"
            height={40}
            width={50}
          />
        </div>
        <div className="items-start justify-center flex px-4 sm:px-8 md:px-24 flex-col  py-12 mx-auto">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 md:mt-8 md:w-full tracking-tight text-start capitalize">
            Every need for your beloved pet
          </h1>
          <p className="pt-6 text-base sm:text-lg md:text-xl max-w-[54ch] font-semibold">
            Focused on quality and reliability, Embark delivers a comprehensive
            suite of services across its network
          </p>
          <div className="relative mt-10 w-full">
            <div className="relative">
              <div className="w-full relative h-[400px] md:h-[80vh]">
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
              className="absolute hidden md:block bottom-[-90px] md:bottom-[-60px] -rotate-12 md:rotate-0 left-0 md:left-[-60px]"
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
