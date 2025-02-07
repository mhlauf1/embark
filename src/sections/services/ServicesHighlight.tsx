import React from "react";
import Image from "next/image";

const serviceItemData = [
  {
    id: 0,
    text: "Quality Boarding for Your Beloved Pets",
    image: "/services-3.png",
  },
  {
    id: 1,
    text: "Professional Grooming to Keep Pets Looking Great",
    image: "/services-2.png",
  },
  {
    id: 2,
    text: "Engaging Daycare for Social and Happy Pets",
    image: "/services-1.png",
  },
];

const ServiceItem = ({ text, image }: { text: string; image: string }) => (
  <div className="space-y-4">
    <div className="h-[265px] w-full">
      <Image
        src={image}
        alt={text}
        width={490}
        height={265}
        className="rounded-lg border border-[#183453] w-full h-full object-cover"
      />
    </div>
    <p className="text-xl font-semibold">{text}</p>
  </div>
);
const ServicesHighlight = () => {
  return (
    <section className="py-24  md:py-36 ">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col">
        <div className="flex flex-col gap-4 items-start">
          <Image src="/ball.png" height={60} width={60} alt="Paw Prints" />
          <h2 className="text-4xl mt-4 md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start capitalize w-auto md:w-[20ch]">
            Professional Pet Services Tailored for You
          </h2>
          <p className="pt-2 md:pt-4 md:px-0 text-start hero-text font-semibold">
            At Embark Pet Services, we understand that your pet deserves the
            best. Our extensive range of services ensures that every aspect of
            your pet&apos;s care is covered, from grooming to veterinary needs.
            Experience peace of mind knowing your furry friend is in expert
            hands.
          </p>
        </div>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-3 gap-16 md:gap-6">
          {serviceItemData.map((item) => (
            <div key={item.id}>
              <ServiceItem text={item.text} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
