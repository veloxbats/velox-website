export const ProductSeries = () => {
  const series = [
    {
      id: 1,
      title: "Strike Series",
      subtitle: "Entry Level",
      material: "Kashmir Willow",
      description:
        "Perfect for growing players seeking excellent value and reliable performance.",
    },
    {
      id: 2,
      title: "Impact Series",
      subtitle: "Superior",
      material: "Kashmir Willow",
      description:
        "Enhanced edges and premium construction for elevated game performance.",
    },
    {
      id: 3,
      title: "Velocity Series",
      subtitle: "Top Level",
      material: "English Willow",
      description:
        "Elite craftsmanship and maximum performance for professional players.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Velox Bat Series
          </h2>
          <p className="text-lg text-black/60">
            Three distinct series engineered for every level of play
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {series.map((item) => (
            <div
              key={item.id}
              className="flex flex-col group cursor-pointer transition-all duration-300"
            >
              {/* Image container */}
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-b from-grey-50 to-grey-100 aspect-square flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <div className="text-center space-y-3">
                  <div className="text-6xl">🏏</div>
                  <p className="text-sm text-black/40">{item.material} Bat</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-black/50 uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-black mt-1">
                    {item.title}
                  </h3>
                </div>

                <p className="text-black/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Neon green underline accent */}
                <div className="pt-4">
                  <div className="h-1 w-16 bg-velox-neon-green rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
