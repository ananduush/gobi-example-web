import ImageDisplay from "./components/HomePage/ImageDisplay";
import ProductSidebar from "./components/HomePage/ProductSidebar";
import ProductDescription from "./components/HomePage/ProductDescription";
import ProductDetails from "./components/HomePage/ProductDetails";
import ProductFeatures from "./components/HomePage/ProductFeatures";
import QualityFeatures from "./components/HomePage/QualityFeatures";
import HomeBanner from "./components/HomePage/HomeBanner";
import Recommendation from "./components/HomePage/Recommendations";
import CustomerReviews from "./components/HomePage/CustomerReviews";

export default async function Home() {
  return (
    <div className="">
      {/* Product display */}
      <div className="grid grid-cols-[60%_40%]">
        <ImageDisplay />

        <ProductSidebar />
      </div>

      {/* Product Description */}
      <div className="grid grid-cols-[60%_40%] container py-[80]">
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
      <div className="mt-[60px]">
        <Recommendation />
      </div>

      <div className="mt-[60px]">
        <CustomerReviews />
      </div>
    </div>
  );
}
