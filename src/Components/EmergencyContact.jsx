import { FaPhoneVolume } from "react-icons/fa6";

export default function EmergencyContact() {
  return (
    <section className="py-16 bg-slate-800 text-white text-center">
      <FaPhoneVolume className="text-5xl text-yellow-400 mx-auto mb-4" />
      <h3 className="text-2xl font-bold">24/7 Emergency Contact</h3>
      <p className="text-3xl font-black my-3">+91 98765 43299</p>
      <p className="opacity-80">
        For urgent construction site emergencies
      </p>
    </section>
  );
}
