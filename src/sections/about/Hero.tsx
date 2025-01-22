"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[90vh] bg-gradient-to-b from-[#C8E2FF] to-[#9CD8F6]  py-12">
      <div className="items-center justify-between h-full flex md:flex-row px-8 flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-1 items-start flex-col gap-6">
          <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold text-xl capitalize">About Embark</p>
          </div>
          <h1 className="hero-title capitalize w-[12ch]">
            Building Better Pet Care Together
          </h1>
          <p className="pt-4 hero-text font-semibold">
            We&apos;re uniting local pet care brands to create exceptional
            experiences for pets and their families
          </p>
          <Image
            src="/dogs-sitting-drawing.png"
            alt="Embark Services"
            height={124}
            className="mt-[12vh]"
            width={150}
          />
        </div>
        <div className="flex-1 flex items-end justify-end">
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
