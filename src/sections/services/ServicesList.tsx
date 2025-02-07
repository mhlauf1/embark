import Daycare from "./Daycare";
import Boarding from "./Boarding";
import Grooming from "./Grooming";
import Health from "./Heath";

const ServicesList = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-[#F9FDFF] relative to-[#EEF9FF]">
      <div className="max-w-screen-2xl gap-36 mx-auto px-8 flex flex-col">
        <Daycare />
        <Boarding />
        <Grooming />
        <Health />
      </div>
    </section>
  );
};

export default ServicesList;
