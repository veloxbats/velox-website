import { useParams, Link } from "react-router-dom";

export default function Category() {
  const { category } = useParams();

  const categoryNames: Record<string, string> = {
    "leather-ball": "Leather Ball Bats",
    "tennis-scoop": "Hard Tennis Scoop Bats",
  };

  const categoryName = categoryNames[category || ""] || "Category";

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-black">
            {categoryName}
          </h1>
          <p className="text-lg text-black/60 max-w-md mx-auto">
            This category page is coming soon. Continue building this section by providing more details about what you'd like to see here.
          </p>
          <div className="pt-8">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
