import { Link } from "react-router-dom";

export const ProductCatalogGrid = () => {
  const products = [
    {
      id: 1,
      name: "Strike Series Leather Ball Bat",
      series: "Strike",
      description: "Entry-level Kashmir Willow",
      price: "$89.99",
      image: "🏏",
    },
    {
      id: 2,
      name: "Impact Series Leather Ball Bat",
      series: "Impact",
      description: "Superior Kashmir Willow",
      price: "$149.99",
      image: "🏏",
    },
    {
      id: 3,
      name: "Velocity Series Leather Ball Bat",
      series: "Velocity",
      description: "Premium English Willow",
      price: "$299.99",
      image: "🏏",
    },
    {
      id: 4,
      name: "Single Blade Hard Tennis Bat",
      series: "Tennis",
      description: "Optimized scoop design",
      price: "$79.99",
      image: "🎾",
    },
    {
      id: 5,
      name: "Double Blade Hard Tennis Bat",
      series: "Tennis",
      description: "Professional-grade scoop",
      price: "$129.99",
      image: "🎾",
    },
  ];

  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Product Catalog
          </h2>
          <p className="text-lg text-black/60">
            Premium cricket bats for every player
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-black/5 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product image */}
              <div className="aspect-square bg-gradient-to-br from-grey-50 to-grey-100 flex items-center justify-center p-4">
                <div className="text-5xl">{product.image}</div>
              </div>

              {/* Product info */}
              <div className="flex-1 p-4 flex flex-col">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                    {product.series}
                  </p>
                  <h3 className="text-sm font-bold text-black mt-1 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <p className="text-xs text-black/60 mb-4">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <p className="text-lg font-bold text-black">
                    {product.price}
                  </p>
                </div>

                {/* View Details button */}
                <Link
                  to={`/product/${product.id}`}
                  className="w-full py-2 px-3 border-2 border-black text-black text-sm font-semibold rounded-lg hover:bg-black/5 transition-colors text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
