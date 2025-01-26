import Image from "next/image";
import productData from "../../public/productData.json";

export default async function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        {/* Image display component */}
        <div className="grid grid-cols-2">
          {productData.images.map((e, idx) => (
            <img
              key={`image-${idx}`}
              src={e.url}
              alt="Gobi logo"
              className=""
            />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
