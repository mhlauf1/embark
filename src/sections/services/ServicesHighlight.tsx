import React from "react";
import Image from "next/image";

const serviceItemData = [
  {
    id: 0,
    text: "Quality Boarding for Your Beloved Pets",
    image: "/services-1.png",
  },
  {
    id: 1,
    text: "Professional Grooming to Keep Pets Looking Great",
    image: "/services-2.png",
  },
  {
    id: 2,
    text: "Engaging Daycare for Social and Happy Pets",
    image: "/services-3.png",
  },
];

const ServiceItem = ({ text, image }: { text: string; image: string }) => (
  <div className="space-y-4">
    <Image
      src={image}
      alt={text}
      width={490}
      height={265}
      className="rounded-lg border border-[#183453]"
    />
    <p className="text-2xl font-semibold w-[90%]">{text}</p>
  </div>
);
const ServicesHighlight = () => {
  return (
    <section className="py-36 ">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col">
        <div className="flex flex-col gap-4 items-start">
          <Image src="/ball.png" height={60} width={60} alt="Paw Prints" />
          <h2 className=" w-[16ch]">
            Professional Pet Services Tailored for You
          </h2>
          <p className="pt-4 hero-text font-semibold">
            At Embark Pet Services, we understand that your pet deserves the
            best. Our extensive range of services ensures that every aspect of
            your pet&apos;s care is covered, from grooming to veterinary needs.
            Experience peace of mind knowing your furry friend is in expert
            hands.
          </p>
        </div>
        <div className="grid mt-8 grid-cols-3 gap-6">
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
