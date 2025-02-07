"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-[#9CD8F6] pb-16 min-h-screen">
      <div className="relative px-[5%] md:px-8 pt-16 md:py-12">
        <div className="items-start mt-[10vh] h-full z-10 justify-between flex flex-col md:max-w-screen-2xl mx-auto">
          <div className="flex flex-row w-full  justify-between">
            <div className="flex z-5 flex-1  px-4 items-start flex-col gap-6">
              <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl text-center md:text-start capitalize">
                Caring for your{" "}
                <span className="text-white">
                  <br /> pets
                </span>{" "}
                like family
              </h1>
              <div className="space-x-2 flex flex-row justify-center md:justify-start mt-3 md:mt-6">
                <Link href="/services">
                  <Button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-7 px-8 md:py-8 md:px-10 bg-white">
                    Our Services
                  </Button>
                </Link>
                <Link href="/network">
                  <Button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
                    Our Locations
                  </Button>
                </Link>
              </div>
              <p className="pt-2 md:pt-4 px-4 md:px-0 text-center md:text-start hero-text font-semibold">
                We unite local pet care brands under one standard of excellence
              </p>
            </div>
            <div className="flex relative">
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
          <motion.div
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
          </motion.div>

          <div className="px-[5%] md:px-8 md:max-w-screen-2xl mx-auto w-full ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full border-2 border-[#183453] h-full rounded-xl object-cover"
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
