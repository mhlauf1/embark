import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#EFF9FF] py-12 md:py-24">
      <div className="px-4 sm:px-8 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex flex-1 items-start flex-col w-full gap-5 md:gap-8">
            <div className="border border-[#183453]/50 rounded-full bg-white py-1 flex items-center gap-2 px-3">
              <Image
                src="/paw-small.svg"
                height={16}
                width={16}
                alt="Paw Prints"
              />
              <p className="font-semibold text-base md:text-lg lg:text-xl capitalize">
                About Embark
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full tracking-tight text-start capitalize">
              Building Better Pet Care Together
            </h1>
            <p className="text-base sm:text-lg md:text-xl w-auto md:max-w-[42ch] font-semibold">
              We&apos;re uniting local pet care brands to create exceptional
              experiences for pets and their families
            </p>
            <Image
              className="mt-4 hidden md:block md:mt-8 w-[150px] md:w-[200px] h-auto"
              src="/dogs-drawing.png"
              height={65}
              width={200}
              alt="Dog drawing"
            />
          </div>
          {/* Right Image */}
          <div className="flex-1 w-full hidden md:flex justify-end md:w-auto">
            <Image
              src="/about-hero.png"
              height={575}
              width={625}
              alt="Dog bathing"
              className="w-full h-auto md:w-[625px] mx-auto md:mx-0"
            />
          </div>
          <div className="flex-1 w-full md:hidden flex">
            <Image
              src="/mobile-about-hero.png"
              height={575}
              width={625}
              alt="Dog bathing"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
