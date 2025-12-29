import { useState } from "react";
import Toast from "./Toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 bg-white p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-4 rounded focus:outline-none focus:border-orange-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-4 rounded focus:outline-none focus:border-orange-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 p-4 rounded resize-none focus:outline-none focus:border-orange-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-3 rounded uppercase tracking-wide disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <Toast
        show={showToast}
        message={`Thank you ${formData.name || "!"} Your message has been sent successfully.`}
      />
    </>
  );
}
