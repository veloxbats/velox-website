import { Link } from "react-router-dom";
import { CategoryIcon } from "./CategoryIcon";

export const CategoryCards = () => {
  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Shop by Category
          </h2>
        </div>

        {/* Three column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Leather Ball Bats Card */}
          <Link
            to="/category/leather-ball"
            className="group relative rounded-xl overflow-hidden cursor-pointer"
          >
            <div className="bg-gradient-to-br from-grey-50 to-grey-100 aspect-square flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              {/* Hover overlay with neon green accent */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              <div className="absolute top-0 left-0 h-1 w-0 bg-velox-neon-green group-hover:w-full transition-all duration-300" />

              <div className="relative z-10 text-center space-y-2 px-4">
                <CategoryIcon type="leather-ball" className="w-16 h-16 mx-auto" />
                <div>
                  <h3 className="text-lg font-bold text-black">
                    Leather Ball Bats
                  </h3>
                  <p className="text-xs text-black/60 mt-1">
                    Cricket tradition
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Hard Tennis Scoop Bats Card */}
          <Link
            to="/category/tennis-scoop"
            className="group relative rounded-xl overflow-hidden cursor-pointer"
          >
            <div className="bg-gradient-to-br from-grey-50 to-grey-100 aspect-square flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              {/* Hover overlay with neon green accent */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              <div className="absolute top-0 left-0 h-1 w-0 bg-velox-neon-green group-hover:w-full transition-all duration-300" />

              <div className="relative z-10 text-center space-y-2 px-4">
                <CategoryIcon type="tennis-scoop" className="w-16 h-16 mx-auto" />
                <div>
                  <h3 className="text-lg font-bold text-black">
                    Hard Tennis Scoop Bats
                  </h3>
                  <p className="text-xs text-black/60 mt-1">
                    Power meets precision
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
