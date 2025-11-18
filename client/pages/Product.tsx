import { useParams, Link } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  const products: Record<
    string,
    {
      name: string;
      series: string;
      description: string;
      price: string;
      material: string;
      features: string[];
    }
  > = {
    "1": {
      name: "Strike Series Leather Ball Bat",
      series: "Strike",
      description:
        "Entry-level Kashmir Willow cricket bat perfect for growing players",
      price: "$89.99",
      material: "Kashmir Willow",
      features: [
        "Lightweight and easy to handle",
        "Good sweet spot for beginners",
        "Durable construction",
        "Great value for money",
      ],
    },
    "2": {
      name: "Impact Series Leather Ball Bat",
      series: "Impact",
      description: "Superior Kashmir Willow bat for enhanced performance",
      price: "$149.99",
      material: "Superior Kashmir Willow",
      features: [
        "Thicker edges for better performance",
        "Improved sweet spot",
        "Enhanced durability",
        "Professional-quality construction",
      ],
    },
    "3": {
      name: "Velocity Series Leather Ball Bat",
      series: "Velocity",
      description: "Premium English Willow bat for elite players",
      price: "$299.99",
      material: "English Willow",
      features: [
        "Maximum performance and power",
        "Superior willow grade",
        "Professional-grade construction",
        "Tournament-quality equipment",
      ],
    },
    "4": {
      name: "Single Blade Hard Tennis Bat",
      series: "Tennis",
      description: "Optimized scoop design for hard tennis balls",
      price: "$79.99",
      material: "Composite Willow",
      features: [
        "Optimized scoop profile",
        "Single blade design",
        "Lightweight and maneuverable",
        "Great for beginners",
      ],
    },
    "5": {
      name: "Double Blade Hard Tennis Bat",
      series: "Tennis",
      description: "Professional-grade scoop bat for hard tennis play",
      price: "$129.99",
      material: "Premium Composite",
      features: [
        "Double blade design",
        "Professional-grade scoop",
        "Maximum power and control",
        "Tournament-approved",
      ],
    },
  };

  const product = products[id || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-black">Product Not Found</h1>
          <p className="text-lg text-black/60">
            We couldn't find the product you're looking for.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex gap-2 text-sm text-black/60">
          <Link to="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-2xl bg-gradient-to-br from-grey-50 to-grey-100 aspect-square flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-8xl">🏏</div>
              <p className="text-sm text-black/40">Product Image</p>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-black/50 uppercase tracking-wider mb-2">
                {product.series} Series
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                {product.name}
              </h1>
              <div className="h-1 w-16 bg-velox-neon-green rounded-full mb-6" />
            </div>

            {/* Price */}
            <div>
              <p className="text-black/60 text-sm mb-2">Price</p>
              <p className="text-4xl font-bold text-black">{product.price}</p>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-black/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Material */}
            <div>
              <p className="text-black/60 text-sm mb-2">Material</p>
              <p className="text-lg font-semibold text-black">
                {product.material}
              </p>
            </div>

            {/* Features */}
            <div>
              <p className="text-black/60 text-sm mb-4">Key Features</p>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-velox-neon-green font-bold">✓</span>
                    <span className="text-black/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 pt-8">
              <button className="flex-1 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors">
                Add to Cart
              </button>
              <Link
                to="/shop"
                className="flex-1 px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black/5 transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Related section */}
        <div className="mt-20 pt-20 border-t border-black/10">
          <h2 className="text-3xl font-bold text-black mb-6">
            More from {product.series} Series
          </h2>
          <p className="text-black/60 mb-8">
            Explore other bats in the {product.series} series or check out our
            complete collection.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black/5 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
