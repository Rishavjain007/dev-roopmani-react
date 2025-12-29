import { FaAward, FaUsersGear } from "react-icons/fa6";

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-24 text-white"
      style={{
        backgroundColor: "#1a252f",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <Feature
            icon={<FaAward />}
            title="Quality Assurance"
            desc="ISO certified processes with rigorous quality checks at every stage."
          />

          <Feature
            icon={<FaUsersGear />}
            title="Expert Team"
            desc="Highly skilled engineers and technicians with decades of experience."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="px-6">
      <div className="text-5xl text-yellow-400 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}
