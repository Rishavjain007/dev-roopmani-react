import Stats from "./Stats";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT CONTENT */}
        <div>
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase">
              About Us
            </h2>
            <div className="w-20 h-1 bg-orange-500 mt-4 relative">
              <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Excellence in Road Construction Since Inception
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            At DEV ROOPMANI PRIVATE LIMITED, we specialize in the construction
            of high-quality roads, highways, and bridges. Our commitment to
            engineering excellence ensures durability and safety for every
            mile we build.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Utilizing state-of-the-art machinery and a skilled workforce, we
            handle projects ranging from rural road connectivity to complex
            national highway expansions.
          </p>

          {/* STATS */}
          <Stats />
        </div>

        {/* IMAGE */}
        <div className="relative order-first md:order-last">
          <div className="absolute -top-5 -left-5 w-36 h-36 border-[10px] border-orange-500/20 rounded-lg -z-10"></div>

          <img
            src="https://t3.ftcdn.net/jpg/09/89/25/14/360_F_989251404_aqQRi6zrKX30s3M69ZecK5sKKZKimiEn.jpg"
            alt="Road Construction Site"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}
