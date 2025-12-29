const ongoing = [
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXcNOqhFgiBhOaV7kVu7Yq9foEibGROGN7Q&s", title: "Coastal Highway", info: "75 KM | Dec 2024", place: "Goa-MH" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWDDp_fW2ziRqT-vF12Xjd-SZGjFQcLVINw&s", title: "Metro Extension Roads", info: "18 KM | Aug 2024", place: "Delhi NCR" },
  { img: "https://img.indiafilings.com/learn/wp-content/uploads/2019/07/Delhi-Mumbai-Industrial-Corridor.jpg", title: "Industrial Corridor", info: "42 KM | Mar 2025", place: "Gujarat" },
  { img: "https://thumbs.dreamstime.com/b/aerial-view-busy-american-highway-road-under-construction-development-roundabout-traffic-infrastructure-state-transportation-395721049.jpg", title: "Tourist Circuit Road", info: "55 KM | Nov 2024", place: "Rajasthan" },
];

export default function OngoingProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800 mb-12 text-center">
          Ongoing Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ongoing.map((p, i) => (
            <div key={i} className="relative h-[260px] overflow-hidden rounded-lg group">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
              <div className="absolute inset-0 bg-black/70 flex items-end p-4 text-white">
                <div>
                  <h4 className="font-bold">{p.title}</h4>
                  <p className="text-sm">{p.info}</p>
                  <p className="text-xs opacity-80">{p.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
