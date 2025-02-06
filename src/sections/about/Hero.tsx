import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-auto md:h-[90vh] bg-[#EFF9FF] py-24 md:py-12">
      <div className="items-center justify-between h-full flex md:flex-row px-8 flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-1 items-start flex-col gap-8">
          <div className="border border-[#183453]/50 rounded-full bg-white py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold text-lg md:text-xl capitalize">
              About Embark
            </p>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl text-start capitalize ">
            Building Better Pet Care Together
          </h1>
          <p className="text-lg md:text-xl w-auto md:w-[42ch] font-semibold">
            We&apos;re uniting local pet care brands to create exceptional
            experiences for pets and their families
          </p>
          <Image
            className="mt-8"
            src="/dogs-drawing.png"
            height={65}
            width={200}
            alt="Dog drawing"
          />
        </div>
        <div className="mt-12 md:mt-0 flex items-end justify-end">
          <Image
            src="/about-main.png"
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
