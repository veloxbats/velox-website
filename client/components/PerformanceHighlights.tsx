import { Zap, Shield, Leaf, Award } from "lucide-react";

export const PerformanceHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Lightweight Power",
      icon: Zap,
      description: "Maximum impact with minimal weight for superior control",
    },
    {
      id: 2,
      title: "Thick Edges",
      icon: Shield,
      description: "Enhanced sweet spot for more consistent performance",
    },
    {
      id: 3,
      title: "Superior Willow",
      icon: Leaf,
      description: "Premium grade materials for exceptional durability",
    },
    {
      id: 4,
      title: "Built for Durability",
      icon: Award,
      description: "Engineered to withstand years of intense play",
    },
  ];

  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Performance Built In
          </h2>
          <p className="text-lg text-black/60">
            Every bat engineered for excellence
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-start p-6 rounded-xl bg-velox-soft-grey group hover:bg-black/5 transition-colors"
              >
                {/* Icon */}
                <div className="mb-4 p-3 bg-black/10 rounded-lg group-hover:bg-black/20 transition-colors">
                  <Icon size={24} className="text-black" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-black/60 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Neon green underline accent */}
                <div className="mt-auto">
                  <div className="h-1 w-12 bg-velox-neon-green rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
