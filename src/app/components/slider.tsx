import images from "../constants/images";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="overflow-hidden  w-full pt-2">
      {/* Animated container */}
      <div className="flex space-x-2 animate-marquee whitespace-nowrap">
        {/* Duplicating images to make the transition seamless */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="w-full h-[30px] md:h-[50px] flex-shrink-0 ">
            <Image src={image} alt={`slider image ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
