import { Link } from "react-router-dom";

export default function ServicesCTASection() {
  return (
    <section className="py-24 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
        Ready to Start Your Project?
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        Contact us today for a free consultation and quote for your infrastructure project.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-8 py-3 rounded uppercase"
      >
        Get Free Consultation
      </Link>
    </section>
  );
}
