import { useEffect, useState } from "react";

const projects = [
  {
    cat: "highway",
    img: "https://assets-news.housing.com/news/wp-content/uploads/2023/05/07204014/NH-48-Route-and-construction-details-f.jpg",
    title: "National Highway NH-48",
    info: "6-Lane Expressway | 120 KM | 2022",
    place: "Delhi-Jaipur",
  },
  {
    cat: "highway",
    img: "https://newprojectinformation.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-04-at-13.23.21.webp",
    title: "State Highway SH-12",
    info: "4-Lane | 85 KM | 2021",
    place: "Uttar Pradesh",
  },
  {
    cat: "bridge",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWkcjoaoI1ZrYmddMuAjjCp0DfkYaWODJgg&s",
    title: "Ganga River Bridge",
    info: "Cable-Stayed | 2.5 KM | 2023",
    place: "Bihar",
  },
  {
    cat: "bridge",
    img: "https://media.istockphoto.com/id/619668880/photo/road-under-construction.jpg?s=612x612&w=0&k=20&c=gNLp5bIBL42dFERa0AK9Ha4NU3BTVdeCSdEHWJ37HLI=",
    title: "City Center Flyover",
    info: "3-Level Flyover | Ongoing",
    place: "Mumbai",
  },
  {
    cat: "urban",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYC7kac9ICAetKkJtxnbwI2u4ZR6zJV9uALQ&s",
    title: "Smart City Roads",
    info: "45 KM | 2022",
    place: "Surat",
  },
  {
    cat: "urban",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJZNo0_l8g-OltNhrHKVRADMod2DEuwSDxg&s",
    title: "Industrial Zone Access",
    info: "32 KM | 2021",
    place: "Gujarat",
  },
  {
    cat: "rural",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC8BfmMFLvDe9C93mSSk6278L5J6SxkfvZw&s",
    title: "Rural Connectivity",
    info: "PMGSY | 150 KM | 2023",
    place: "MP",
  },
  {
    cat: "rural",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCULHb7MHJL93zjJ61pU_5u6qBB7R6KwkXw&s",
    title: "Hill Road Development",
    info: "65 KM | Ongoing",
    place: "Uttarakhand",
  },
];

export default function ProjectsGridSection({ filter }) {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    setVisible([]);
    setTimeout(() => setVisible(projects), 50);
  }, [filter]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects
        .filter((p) => filter === "all" || p.cat === filter)
        .map((p, i) => (
          <div
            key={i}
            className="group relative h-[300px] overflow-hidden rounded-lg transition-all duration-500"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
              <div className="p-5 text-white">
                <h4 className="font-bold">{p.title}</h4>
                <p className="text-sm">{p.info}</p>
                <p className="text-xs mt-1 opacity-80">{p.place}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
