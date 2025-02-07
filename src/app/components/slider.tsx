import images from "../constants/images";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="overflow-hidden bg-white w-full px-2">
      {/* Animated container */}
      <div className="flex space-x-4 animate-marquee whitespace-nowrap">
        {/* Duplicating images to make the transition seamless */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="w-full px-2 h-[30px] flex-shrink-0 ">
            <Image src={image} alt={`slider image ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
