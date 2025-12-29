// ✅ Import MUST be at the top
import img1 from "./../assets/images/Gemini_Generated_Image_iyc837iyc837iyc8.png";
import img2 from "./../assets/images/Gemini_Generated_Image_z16hukz16hukz16h.png";

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800">
            Our Leadership
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 relative">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>
        </div>

        <p className="text-gray-600 mb-14">
          Experienced professionals driving success and innovation
        </p>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <LeaderCard
            img={img1}
            name="Mr. Santosh Kumar"
            role="Director"
            desc="Contact No.:-9934000221 | Mail:-santoshmlg221@gmail.com"
          />

          <LeaderCard
            img={img2}
            name="Mr. Shuraj"
            role="Director"
            desc="Contact No.:-9534064215 | Mail:-shishuraj0009@gmail.com"
          />
        </div>
      </div>
    </section>
  );
}

function LeaderCard({ img, name, role, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover mb-5 border-4 border-orange-100"
      />
      <h4 className="font-bold text-slate-800 text-lg">{name}</h4>
      <span className="text-orange-500 font-medium text-sm block">
        {role}
      </span>
      <p className="mt-3 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
