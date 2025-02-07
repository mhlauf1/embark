"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-[#9CD8F6] pb-12 md:pb-16">
      <div className="relative px-4 sm:px-8 md:px-24 pt-4 md:pt-16 md:py-12">
        <div className="items-start mt-[7vh] md:mt-[10vh] h-full z-10 justify-between flex flex-col">
          <div className="flex flex-col md:flex-row w-full  justify-between">
            <div className="flex z-5 flex-1 items-start flex-col gap-6">
              <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl text-center md:text-start capitalize">
                Caring for your{" "}
                <span className="text-white">
                  <br /> pets
                </span>{" "}
                like family
              </h1>
              <div className="space-x-2 flex flex-row justify-center md:justify-start mt-2 md:mt-6">
                <Link href="/services">
                  <button className="font-medium text-md md:text-xl border border-[#183453]/50 rounded-full py-4 px-8 md:py-5 md:px-10 bg-white">
                    Our Services
                  </button>
                </Link>
                <Link href="/network">
                  <button className="font-medium text-md md:text-xl border border-[#183453]/50 rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
                    Our Locations
                  </button>
                </Link>
              </div>
              <p className="md:pt-4 text-start text-lg md:text-xl font-semibold">
                We unite local pet care brands under one standard of excellence
              </p>
            </div>
            <div className="hidden md:flex relative">
              <motion.div
                layout
                whileHover={{ scale: 1.01 }}
                className="h-auto w-auto duration-300 flex"
              >
                <Image
                  src="/hero-badge.png"
                  height={300}
                  width={300}
                  alt="Hero Badge"
                  className=" rounded-full object-contain"
                />
              </motion.div>
            </div>
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt flex w-full justify-end"
          >
            <Image
              src="/hero-pup-drawing.png"
              alt="Embark drawing"
              height={90}
              width={350}
            />
          </motion.div> */}

          <div className="mt-6 md:mt-12  w-full ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-md md:rounded-xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-md md:rounded-xl object-cover"
              >
                <source src="/hero-vid.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
