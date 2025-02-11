import Link from "next/link";
import { link1, link2, link3, link4 } from "../data/footerlinks";
import Button from "../utils/button";
export default function Footer() {
  return (
    <div className="w-full bg-headertext flex flex-col items-center justify-center">
      <div className="flex   items-center justify-center gap-10 flex-col py-10 w-full px-40">
        <div className="flex items-start xl:flex-row flex-col justify-between w-full ">
          <h1 className="text-white font-semibold xl:text-3xl text-2xl">
            Finite Pay
          </h1>
          <div className="flex flex-col items-start gap-3 ">
            <p className="text-xl text-secondaryColor">
              Sign up for our weekly news letter
            </p>
            <div className="flex gap-5 items-start justify-center ">
              <input
                type="text"
                placeholder="Enter your email"
                className="xl:w-[600px] w-full h-12 px-5  focus:outline-none p-2 rounded-md"
              />
              <Button
                text="Contact Us"
                styles={`bg-secondaryColor text-white w-[119px] px-3  h-12 rounded-md`}
              />
            </div>
          </div>
        </div>
        <div className="flex items-start xl:flex-row flex-col justify-between w-full">
          <div className="flex flex-col gap-4 items-center justify-center">
            {link1.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-secondaryColor font-semibold text-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            {link2.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-secondaryColor font-semibold text-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            {link3.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-secondaryColor font-semibold text-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            {link4.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-secondaryColor font-semibold text-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="xl:w-[800px] w-full h-1 rounded-md bg-gray-50">

        </div>
        <p className="text-secondaryColor text-xl font-semibold">Copyright 2025</p>
      </div>
    </div>
  );
}
