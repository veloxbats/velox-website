import { Hero } from "../components/Hero";
import { ProductSeries } from "../components/ProductSeries";
import { CategoryCards } from "../components/CategoryCards";
import { PerformanceHighlights } from "../components/PerformanceHighlights";
import { ProductCatalogGrid } from "../components/ProductCatalogGrid";
import { AboutVelox } from "../components/AboutVelox";
import { Testimonials } from "../components/Testimonials";
import { ContactUs } from "../components/ContactUs";

export default function Index() {
  return (
    <main className="w-full">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Product Series Overview */}
      <ProductSeries />

      {/* Section 3: Category Cards */}
      <CategoryCards />

      {/* Section 4: Performance Highlights */}
      <PerformanceHighlights />

      {/* Section 5: Product Catalog Grid */}
      <ProductCatalogGrid />

      {/* Section 6: About Velox */}
      <AboutVelox />

      {/* Section 7: Testimonials */}
      <Testimonials />

      {/* Section 8: Contact Us */}
      <ContactUs />
    </main>
  );
}
