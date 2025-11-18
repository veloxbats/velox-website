import { AboutVelox } from "../components/AboutVelox";

export default function About() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-black">
              About Velox
            </h1>
            <p className="text-xl text-black/60 max-w-2xl">
              We're passionate about creating premium cricket bats that combine engineering excellence with timeless craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <AboutVelox />

      {/* Mission section */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Our Mission</h3>
              <p className="text-black/70 leading-relaxed">
                To empower cricket players of all levels with premium, performance-engineered bats that deliver exceptional quality and durability.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Our Vision</h3>
              <p className="text-black/70 leading-relaxed">
                To become the most trusted cricket bat brand globally, recognized for innovation, craftsmanship, and commitment to player success.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Our Values</h3>
              <p className="text-black/70 leading-relaxed">
                Excellence in every bat, integrity in our relationships, and dedication to supporting cricket players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Velox */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 text-center">
            Why Choose Velox
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-velox-soft-grey">
              <h3 className="text-xl font-bold text-black mb-3">Premium Materials</h3>
              <p className="text-black/70">
                We source only the finest Kashmir and English willow for our cricket bats, ensuring superior performance and durability.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-velox-soft-grey">
              <h3 className="text-xl font-bold text-black mb-3">Expert Craftsmanship</h3>
              <p className="text-black/70">
                Each bat is hand-crafted by experienced artisans who understand the nuances of cricket equipment manufacturing.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-velox-soft-grey">
              <h3 className="text-xl font-bold text-black mb-3">Rigorous Testing</h3>
              <p className="text-black/70">
                Every bat undergoes comprehensive testing to meet our exacting standards for performance, durability, and reliability.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-velox-soft-grey">
              <h3 className="text-xl font-bold text-black mb-3">Player-Focused Design</h3>
              <p className="text-black/70">
                Our designs are informed by feedback from professional and amateur cricket players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
