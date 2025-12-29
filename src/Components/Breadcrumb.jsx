import { Link } from "react-router-dom";

export default function Breadcrumb({ current }) {
  return (
    <section className="bg-gray-100 py-5 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm">
        <Link
          to="/"
          className="text-orange-500 hover:underline font-medium"
        >
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-600">{current}</span>
      </div>
    </section>
  );
}
