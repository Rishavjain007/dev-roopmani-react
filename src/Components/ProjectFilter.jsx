export default function ProjectFilter({ active, onChange }) {
  const filters = [
    { key: "all", label: "All Projects" },
    { key: "highway", label: "Highways" },
    { key: "bridge", label: "Bridges" },
    { key: "urban", label: "Urban Roads" },
    { key: "rural", label: "Rural Roads" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={`px-6 py-2 font-bold uppercase rounded transition
            ${
              active === f.key
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-800 border hover:bg-orange-500 hover:text-white"
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
