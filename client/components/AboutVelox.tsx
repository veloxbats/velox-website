export const AboutVelox = () => {
  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-96">
            {/* Geometric shapes in background */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-black/5 rounded-full translate-x-1/2" />
            <div className="absolute inset-0 bg-gradient-to-br from-grey-50 via-white to-grey-100 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-7xl">⚙️</div>
                <p className="text-sm text-black/40">Cricket Engineering</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                Crafted for Precision.
                <br />
                Built for Power.
              </h2>

              {/* Neon green accent underline */}
              <div className="mt-4 h-1 w-24 bg-velox-neon-green rounded-full" />
            </div>

            <div className="space-y-4 text-black/70 text-lg leading-relaxed">
              <p>
                At Velox, we believe that premium cricket bats should combine
                engineering excellence with timeless craftsmanship. Every bat
                begins as carefully selected willow—either premium Kashmir or
                elite English—and undergoes rigorous testing to ensure it meets
                our exacting standards.
              </p>

              <p>
                Our design philosophy centers on three core principles: power,
                precision, and durability. We engineer thick edges for maximum
                performance, optimize weight distribution for superior control,
                and test every bat to withstand years of competitive play. The
                result is a collection of bats trusted by serious cricket
                players worldwide.
              </p>

              <p>
                From entry-level players discovering their passion to
                professionals pushing the boundaries of performance, Velox
                offers engineered solutions for every level. Each series
                represents our commitment to making premium cricket bats
                accessible, reliable, and truly exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
