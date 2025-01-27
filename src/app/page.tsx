import ImageDisplay from "./components/HomePage/ImageDisplay";
import ProductSidebar from "./components/HomePage/ProductSidebar";
import ProductDescription from "./components/HomePage/ProductDescription";
import ProductDetails from "./components/HomePage/ProductDetails";
import ProductFeatures from "./components/HomePage/ProductFeatures";
import QualityFeatures from "./components/HomePage/QualityFeatures";
import HomeBanner from "./components/HomePage/HomeBanner";
import Recommendation from "./components/HomePage/Recommendations";
import CustomerReviews from "./components/HomePage/CustomerReviews";
import ValuesSection from "./components/HomePage/ValuesSection";

export default async function Home() {
  return (
    <div className="">
      {/* Product display */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] container-restriction">
        <ImageDisplay />

        <ProductSidebar />
      </div>

      {/* Product Description */}
      <div className="grid grid-cols-1 md:gap-10 gap-[40px] md:grid-cols-[60%_40%] container my-[80px] container-restriction">
        <ProductDescription />

        <ProductDetails />
      </div>

      {/* Product Features */}
      <div className="container-restriction">
        <ProductFeatures />
      </div>

      {/* Quality Features */}
      <div className="mt-[60px] container-restriction">
        <QualityFeatures />
      </div>

      {/* Home Banner */}
      <div className="container-restriction">
        <HomeBanner />
      </div>

      {/* Recommendations */}
      <div className="py-[60px] bg-bgColor">
        <Recommendation />
      </div>

      {/* Reviews */}
      <div className="mt-[60px] mb-[40px]">
        <CustomerReviews />
      </div>

      {/* Values */}
      <div className="bg-bgColor pt-[40px] md:pt-[120px] md:pb-[80px]">
        <ValuesSection />
      </div>
    </div>
  );
}
