export default function ProcessSection() {
  const steps = [
    ["1", "Planning & Survey", "Site survey, soil testing, and technical planning."],
    ["2", "Design & Approval", "Engineering design and regulatory approvals."],
    ["3", "Material Procurement", "Sourcing quality materials from verified suppliers."],
    ["4", "Execution", "On-ground construction using modern equipment."],
    ["5", "Quality Testing", "Rigorous testing at each stage."],
    ["6", "Delivery & Support", "Timely completion with post-project support."],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800 mb-4">
          Our Working Process
        </h2>
        <p className="text-gray-600 mb-16">
          A structured and transparent approach ensuring quality execution
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(([no, title, desc], i) => (
            <div key={i} className="p-6">
              <span className="inline-flex w-14 h-14 rounded-full bg-orange-500 text-white items-center justify-center text-xl font-bold mb-4">
                {no}
              </span>
              <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
