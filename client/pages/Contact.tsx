import { ContactUs } from "../components/ContactUs";

export default function Contact() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-black">
              Contact Us
            </h1>
            <p className="text-xl text-black/60 max-w-2xl">
              Have questions about our cricket bats? We're here to help. Reach
              out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <ContactUs />

      {/* Additional info section */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Other Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-velox-soft-grey">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-black/70">
                <a
                  href="mailto:info@velox.com"
                  className="hover:text-black transition-colors"
                >
                  info@velox.com
                </a>
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-velox-soft-grey">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
              <p className="text-black/70">
                <a
                  href="tel:+1234567890"
                  className="hover:text-black transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-velox-soft-grey">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-black mb-2">Address</h3>
              <p className="text-black/70">
                123 Cricket Lane
                <br />
                Sport City, SC 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-black/10">
              <h3 className="text-xl font-bold text-black mb-2">
                What is the warranty on Velox bats?
              </h3>
              <p className="text-black/70">
                All Velox bats come with a 1-year manufacturer's warranty
                covering defects in materials and craftsmanship.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-black/10">
              <h3 className="text-xl font-bold text-black mb-2">
                How long does shipping take?
              </h3>
              <p className="text-black/70">
                We offer standard shipping (5-7 business days) and expedited
                shipping (2-3 business days) options at checkout.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-black/10">
              <h3 className="text-xl font-bold text-black mb-2">
                Do you offer international shipping?
              </h3>
              <p className="text-black/70">
                Yes, we ship to most countries worldwide. International shipping
                times vary by location.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-black/10">
              <h3 className="text-xl font-bold text-black mb-2">
                Can I return a bat if it doesn't suit my game?
              </h3>
              <p className="text-black/70">
                We offer a 30-day return policy for unused bats. If you've used
                the bat and it has a defect, warranty coverage applies.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-black/10">
              <h3 className="text-xl font-bold text-black mb-2">
                Which series is best for beginners?
              </h3>
              <p className="text-black/70">
                The Strike Series is perfect for beginners. It offers excellent
                value and easy-to-use performance characteristics.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-black/10">
              <h3 className="text-xl font-bold text-black mb-2">
                What's the difference between leather ball and tennis ball bats?
              </h3>
              <p className="text-black/70">
                Leather ball bats are designed for traditional cricket with
                heavier, harder balls, while tennis ball bats are optimized for
                lighter, softer balls with a scoop design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
