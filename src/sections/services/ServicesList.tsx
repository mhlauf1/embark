import Daycare from "./Daycare";
import Boarding from "./Boarding";
import Grooming from "./Grooming";
import Health from "./Heath";

const ServicesList = () => {
  return (
    <section className="py-24 md:py-36 border bg-gradient-to-b from-[#F9FDFF] relative to-[#EEF9FF]">
      <div className="gap-24 md:gap-36 px-4 sm:px-8 md:px-24 flex flex-col">
        <Daycare />
        <Boarding />
        <Grooming />
        <Health />
      </div>
    </section>
  );
};

export default ServicesList;
