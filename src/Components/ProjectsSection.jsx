import { Link } from "react-router-dom";

const projects = [
  {
    img: "https://www.jagranimages.com/images/newimg/06072024/06_07_2024-nal_jal_yojna_23753442_16372705.jpg",
    title: "बिहार नल जल योजना",
    desc: "ग्रामीण और शहरी घरों तक पाइपलाइन से स्वच्छ पेयजल उपलब्ध कराने का लक्ष्य, जिससे महिलाओं को पानी भरने की समस्या से राहत मिली।[web:1]",
  },
  {
    img: "https://www.jagranimages.com/images/newimg/14082024/14_08_2024-nal_jal_yojana_23778238_15144213.jpg",
    title: "Har Ghar Nal Ka Jal",
    desc: "‘सात निश्चय’ कार्यक्रम के तहत हर घर नल का जल सुनिश्चित कर जीवन स्तर और स्वास्थ्य में सुधार पर फोकस।[web:1]",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/038/972/123/small/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg",
    title: "Highway Road Construction",
    desc: "नए हाईवे और मुख्य सड़कों के निर्माण से राज्यों के बीच तेज़ और सुरक्षित कनेक्टिविटी।[web:2]",
  },
  {
    img: "https://cdn-ikponof.nitrocdn.com/vGqfYAGlOLDkYkJqZhYIYKEsibdbZnkc/assets/images/optimized/rev-ada926f/www.propelleraero.com/wp-content/uploads/2023/08/Road-construction.jpg",
    title: "Rural Road Connectivity",
    desc: "गांवों को शहरों और बाज़ारों से जोड़ने के लिए पक्की सड़कों का निर्माण, जिससे आर्थिक गतिविधि बढ़ती है।[web:2]",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczYdncbsGdWaudWp106tj4QmaWRLc-42SlA&s",
    title: "Urban Road Upgradation",
    desc: "शहरी क्षेत्रों में मौजूदा सड़कों की चौड़ाई बढ़ाना, रीसर्फेसिंग और ड्रेनेज सुधार जैसे कार्य।[web:2]",
  },
  {
    img: "https://thumbs.dreamstime.com/b/teamwork-road-construction-group-workers-team-people-work-117155167.jpg",
    title: "Industrial Access Roads",
    desc: "औद्योगिक क्षेत्रों तक हैवी व्हीकल मूवमेंट के लिए मज़बूत और टिकाऊ सड़क अवसंरचना तैयार करना।[web:2]",
  },
  {
    img: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/04/27/Photos/rc-kw9H--621x414@LiveMint.jpg",
    title: "Maintenance & Repair",
    desc: "सड़कों पर गड्ढों की मरम्मत, रीसर्फेसिंग और मार्किंग रीपेंटिंग जैसे नियमित रखरखाव कार्य।[web:2]",
  },
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 relative">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg h-[300px]"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="text-sm opacity-90">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-8 py-3 rounded uppercase tracking-wide shadow-lg hover:-translate-y-1"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
