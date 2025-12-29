import {
  FaRoad,
  FaBridge,
  FaLayerGroup,
  FaPersonDigging,
  FaScrewdriverWrench,
  FaClipboardCheck,
  FaWater,
  FaTrafficLight,
  FaRecycle,
} from "react-icons/fa6";

const services = [
  { icon: <FaRoad />, title: "Road Construction", desc: "National highways, state highways, rural and urban roads built with long-lasting materials using modern techniques." },
  { icon: <FaBridge />, title: "Bridge & Flyovers", desc: "Design and construction of bridges, flyovers, and culverts for seamless connectivity." },
  { icon: <FaLayerGroup />, title: "Asphalt Paving", desc: "High-quality hot mix asphalt paving with perfect leveling and compaction." },
  { icon: <FaPersonDigging />, title: "Earthwork & Excavation", desc: "Precise excavation, grading, embankment, and land development works." },
  { icon: <FaScrewdriverWrench />, title: "Road Maintenance", desc: "Resurfacing, pothole repairs, and rehabilitation of existing roads." },
  { icon: <FaClipboardCheck />, title: "Project Consultancy", desc: "Planning, estimation, supervision, and feasibility studies." },
  { icon: <FaWater />, title: "Drainage Systems", desc: "Stormwater drainage, culverts, and water management systems." },
  { icon: <FaTrafficLight />, title: "Road Furniture", desc: "Road signs, guard rails, lighting, traffic signals, and safety features." },
  { icon: <FaRecycle />, title: "Green Roads", desc: "Eco-friendly roads using sustainable and recycled materials." },
];

export default function ServicesGridSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-lg shadow-md text-center transition hover:-translate-y-3 hover:shadow-xl"
          >
            <div className="text-5xl text-orange-500 mb-6 flex justify-center">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {s.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
