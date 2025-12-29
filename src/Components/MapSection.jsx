export default function MapSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase">
            Find Us Here
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 relative">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></span>
          </div>

          <p className="text-gray-600 mt-4">
            Visit our office location for meetings and consultations
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="Company Location Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3589.0804081043357!2d86.992412075405!3d25.89972707726553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDUzJzU5LjAiTiA4NsKwNTknNDIuMCJF!5e0!3m2!1sen!2sin!4v1766996042975!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] md:h-[480px] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
