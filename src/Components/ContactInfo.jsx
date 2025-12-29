import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">
        Contact Information
      </h3>
      <p className="text-gray-600 mb-8">
        Feel free to reach out to us through any of the following channels:
      </p>

      <Info
        icon={<FaLocationDot />}
        title="Head Office"
        lines={[
          "Construction Hub, Industrial Area",
          "City Center, State - 123456",
          "India",
        ]}
      />

      <Info
        icon={<FaPhone />}
        title="Phone Numbers"
        lines={[
          "+91 98765 43210 (Office)",
          "+91 98765 43211 (Support)",
          "+91 98765 43212 (Projects)",
        ]}
      />

      <Info
        icon={<FaEnvelope />}
        title="Email Addresses"
        lines={[
          "info@devroopmani.com",
          "projects@devroopmani.com",
          "support@devroopmani.com",
        ]}
      />

      <Info
        icon={<FaClock />}
        title="Business Hours"
        lines={[
          "Mon – Fri: 9:00 AM – 6:00 PM",
          "Saturday: 10:00 AM – 4:00 PM",
          "Sunday: Emergency Only",
        ]}
      />
    </div>
  );
}

function Info({ icon, title, lines }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
        {lines.map((l, i) => (
          <p key={i} className="text-gray-600 text-sm">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
