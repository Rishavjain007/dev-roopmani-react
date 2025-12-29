import { FaCity, FaBuilding, FaWarehouse } from "react-icons/fa6";

export default function BranchOffices() {
  return (
    <section className="py-24 bg-white">
      <h2 className="text-3xl font-black text-center mb-12">
        Our Branch Offices
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        <Office icon={<FaCity />} title="Delhi Office" place="Connaught Place" />
        <Office icon={<FaBuilding />} title="Mumbai Office" place="BKC" />
        <Office icon={<FaWarehouse />} title="Bangalore Office" place="Whitefield" />
      </div>
    </section>
  );
}

function Office({ icon, title, place }) {
  return (
    <div className="p-8 bg-gray-100 rounded-lg text-center">
      <div className="text-orange-500 text-4xl mb-4">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{place}</p>
    </div>
  );
}
