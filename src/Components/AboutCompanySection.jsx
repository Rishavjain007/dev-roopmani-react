import Stats from "./Stats";

export default function AboutCompanySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* CONTENT */}
        <div>
          {/* Section title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-orange-500 mt-4 relative">
              <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            DEV ROOPMANI PRIVATE LIMITED is a trusted infrastructure and road
            construction company dedicated to delivering high-quality projects
            across India. With a strong technical team and modern machinery, we
            execute projects that stand the test of time.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded with a vision to transform India's infrastructure landscape,
            we have grown to become one of the most reliable construction partners
            for both government and private sector projects.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Our expertise covers highways, bridges, urban roads, industrial
            pavements, and large-scale infrastructure works, ensuring safety,
            durability, and precision in every project.
          </p>

          {/* STATS (same as Home) */}
          <Stats />
        </div>

        {/* IMAGE */}
        <div className="order-first md:order-last">
          <img
            src="https://thumbs.dreamstime.com/b/road-construction-worker-operating-asphalt-paver-machine-repairing-works-33262669.jpg"
            alt="Our Team at Work"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}
