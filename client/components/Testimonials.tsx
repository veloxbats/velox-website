import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex M.",
      initials: "AM",
      role: "Amateur Cricketer",
      rating: 5,
      quote:
        "The Velocity series transformed my game. The control and power are unmatched at any price point.",
    },
    {
      id: 2,
      name: "Jordan K.",
      initials: "JK",
      role: "Club Player",
      rating: 5,
      quote:
        "Best investment I've made in my cricket equipment. Quality is outstanding and the durability is impressive.",
    },
    {
      id: 3,
      name: "Sam P.",
      initials: "SP",
      role: "Casual Player",
      rating: 5,
      quote:
        "The Strike series is perfect for someone like me. Great performance at a reasonable price. Highly recommend!",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-black text-black"
              : "text-black/20"
          }
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Loved by Players
          </h2>
          <p className="text-lg text-black/60">
            Real feedback from real cricket players
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-black/5 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Star rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-black/80 text-base leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar with initials */}
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <p className="text-sm font-bold text-black/70">
                    {testimonial.initials}
                  </p>
                </div>

                {/* Name and role */}
                <div>
                  <p className="font-semibold text-black text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-black/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
