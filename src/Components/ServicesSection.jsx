import {
  FaLayerGroup,
  FaTrowelBricks,
  FaPersonDigging,
  FaRoad,
  FaTruckDroplet,
  FaClipboardCheck,
} from "react-icons/fa6";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 relative">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<FaLayerGroup />}
            title="Road Construction"
            desc="Full-scale construction of asphalt and concrete roads ensuring durability and smooth finish."
          />
          <ServiceCard
            icon={<FaTrowelBricks />}
            title="Bridge Building"
            desc="Expert engineering in constructing sturdy bridges and flyovers."
          />
          <ServiceCard
            icon={<FaPersonDigging />}
            title="Excavation & Grading"
            desc="Precise land leveling and earthwork services for strong foundations."
          />
          <ServiceCard
            icon={<FaRoad />}
            title="Road Maintenance"
            desc="Pothole repair, resurfacing, and expansion joint filling."
          />
          <ServiceCard
            icon={<FaTruckDroplet />}
            title="Asphalt Paving"
            desc="High-quality hot mix asphalt laying with advanced machinery."
          />
          <ServiceCard
            icon={<FaClipboardCheck />}
            title="Project Consultation"
            desc="Planning, feasibility studies, and budget estimation."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="relative bg-white p-10 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-xl overflow-hidden">
      {/* Bottom Accent Bar */}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

      {/* Icon */}
      <div className="text-5xl text-orange-500 mb-6">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
