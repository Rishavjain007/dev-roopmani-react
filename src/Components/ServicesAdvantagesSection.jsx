import { FaClock, FaIndianRupeeSign } from "react-icons/fa6";

export default function ServicesAdvantagesSection() {
  return (
    <section
      className="py-24 text-white"
      style={{
        backgroundColor: "#1a252f",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
          Our Service Advantages
        </h2>
        <p className="text-gray-300 mb-16">
          What sets us apart in the construction industry
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Feature
            icon={<FaClock />}
            title="24/7 Support"
            desc="Round-the-clock project monitoring and client support."
          />
          <Feature
            icon={<FaIndianRupeeSign />}
            title="Cost-Effective"
            desc="Optimized processes ensuring competitive pricing."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="text-5xl text-yellow-400 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
