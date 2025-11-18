import { useState } from "react";
import { Map } from "./Map";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Map showing Bangalore location */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <Map />
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-2">
                Get In Touch
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Have questions about our bats? We'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-lg bg-white text-black placeholder-black/40 focus:outline-none focus:border-black/60 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-lg bg-white text-black placeholder-black/40 focus:outline-none focus:border-black/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg bg-white text-black placeholder-black/40 focus:outline-none focus:border-black/60 transition-colors resize-none"
                  placeholder="Tell us your thoughts..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
