import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("Message sent successfully! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-[#0d1b1e] min-h-screen pb-20 text-white">
      {/* Header */}
      <div className="bg-[#0a1416] text-center py-16 shadow-inner border-b border-[#10b981]/20">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-[#10b981]">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-[#a3b3b3] max-w-2xl mx-auto">
          We'd love to hear from you! Feel free to ask questions, share
          feedback, or get support.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto mt-12 rounded-2xl shadow-lg p-8 border border-[#10b981]/15 bg-[#121c1d]">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Send us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#dbe6e6]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-[#10b981]/20 bg-[#0f1618] text-white
                         placeholder:text-[#7b8c8c] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#dbe6e6]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-[#10b981]/20 bg-[#0f1618] text-white
                         placeholder:text-[#7b8c8c] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#dbe6e6]">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg border border-[#10b981]/20 bg-[#0f1618] text-white
                         placeholder:text-[#7b8c8c] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 rounded-lg
                       shadow-lg shadow-[#10b981]/30 transition-transform duration-300 hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p
            className={`mt-6 text-center font-medium ${
              status.includes("success") || status.includes("✅")
                ? "text-[#34d399]"
                : status === "Sending..."
                ? "text-[#a3b3b3]"
                : "text-red-300"
            }`}
          >
            {status}
          </p>
        )}
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Other Ways to Reach Us
        </h3>
        <p className="text-[#b0c4c4]">
          📧 Email:{" "}
          <span className="font-medium text-[#10b981]">
            support@mystore.com
          </span>
        </p>
        <p className="text-[#b0c4c4] mt-2">
          📞 Phone:{" "}
          <span className="font-medium text-[#10b981]">+62 812-3456-7890</span>
        </p>
        <p className="text-[#b0c4c4] mt-2">
          📍 Address:{" "}
          <span className="font-medium text-[#10b981]">Jakarta, Indonesia</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
