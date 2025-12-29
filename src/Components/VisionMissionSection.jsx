import { FaEye, FaBullseye, FaHandshake } from "react-icons/fa6";

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 relative">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<FaEye />}
            title="Our Vision"
            text="To become a leading infrastructure development company by delivering innovative, sustainable, and high-quality construction solutions that transform communities."
          />

          <Card
            icon={<FaBullseye />}
            title="Our Mission"
            text="To execute projects with excellence, maintain highest safety and quality standards, and contribute to national infrastructure growth while ensuring environmental sustainability."
          />

          <Card
            icon={<FaHandshake />}
            title="Our Values"
            text="Integrity, commitment, transparency, innovation, and client satisfaction guide everything we do. We believe in building relationships as strong as our structures."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-3">
      <div className="text-5xl text-orange-500 mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
