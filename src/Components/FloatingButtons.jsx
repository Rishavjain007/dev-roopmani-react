import { FaWhatsapp, FaPhone } from "react-icons/fa6";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919934000221"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+919534064215"
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition"
        aria-label="Call"
      >
        <FaPhone />
      </a>
    </div>
  );
}
