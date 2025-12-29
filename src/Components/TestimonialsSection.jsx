import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Director, NHAI",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmZCwlQzxR0v6FNRCAwRni9UHoVTjuaeVeA&s",
    text:
      "DEV ROOPMANI delivered our highway project ahead of schedule with exceptional quality. Their team's professionalism is commendable.",
  },
  {
    name: "Priya Sharma",
    role: "Urban Development Commissioner",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94gngVl_wyJup_4ydaminZXWXiGqAcaxQYw&s",
    text:
      "The bridge construction was completed with precision and safety. Their attention to detail and adherence to timelines is impressive.",
  },
  {
    name: "Vikram Singh",
    role: "Infrastructure Consultant",
    img: "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",
    text:
      "We've worked with DEV ROOPMANI on multiple projects. Their expertise in road construction and maintenance is unmatched.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-800">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 relative">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, img, text, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      <p className="italic text-gray-600 mb-6">"{text}"</p>

      <div className="flex items-center gap-4">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h5 className="font-bold text-slate-800">{name}</h5>
          <span className="text-sm text-orange-500">{role}</span>
        </div>
      </div>
    </div>
  );
}
