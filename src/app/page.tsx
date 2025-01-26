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
      <div className="grid grid-cols-[60%_40%]">
        <ImageDisplay />

        <ProductSidebar />
      </div>

      {/* Product Description */}
      <div className="grid grid-cols-[60%_40%] container my-[80]">
        <ProductDescription />

        <ProductDetails />
      </div>

      {/* Product Features */}
      <div>
        <ProductFeatures />
      </div>

      {/* Quality Features */}
      <div className="mt-[60px]">
        <QualityFeatures />
      </div>

      {/* Home Banner */}
      <div>
        <HomeBanner />
      </div>

      {/* Recommendations */}
      <div className="py-[60px] bg-bgColor">
        <Recommendation />
      </div>

      <div className="mt-[60px] mb-[40px]">
        <CustomerReviews />
      </div>

      <div className="bg-bgColor pt-[120px] pb-[80px]">
        <ValuesSection />
      </div>
    </div>
  );
}
