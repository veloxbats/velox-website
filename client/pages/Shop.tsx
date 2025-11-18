import { Link } from "react-router-dom";
import { ProductCatalogGrid } from "../components/ProductCatalogGrid";

export default function Shop() {
  return (
    <main className="w-full">
      {/* Hero section for Shop page */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-black">
              Shop Velox Bats
            </h1>
            <p className="text-xl text-black/60 max-w-2xl">
              Find the perfect cricket bat for your game. Browse our complete collection of premium, performance-engineered equipment.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/category/leather-ball"
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors"
              >
                Leather Ball Bats
              </Link>
              <Link
                to="/category/tennis-scoop"
                className="px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black/5 transition-colors"
              >
                Tennis Scoop Bats
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <ProductCatalogGrid />
    </main>
  );
}
