import { FaHelmetSafety, FaStopwatch } from "react-icons/fa6";

export default function FeaturesSection() {
  return (
    <section
      className="py-20 text-white text-center"
      style={{
        backgroundColor: "#1a252f",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <FeatureItem
          icon={<FaHelmetSafety />}
          title="Safety First"
          desc="Strict adherence to safety protocols for workers and commuters."
        />

        <FeatureItem
          icon={<FaStopwatch />}
          title="Timely Delivery"
          desc="Ensuring projects are completed within the deadline without compromising quality."
        />
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }) {
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
