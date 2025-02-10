import Image from "next/image";
import { whyUs } from "../data/businness";
import Button from "../utils/button";

export default function WhyBusinnessPatrner() {
    return (
        <div className="flex flex-col items-center justify-center p-10 gap-14 bg-[#F5EFE7] w-full">
            <h1 className="text-primaryText font-bold xl:text-4xl text-2xl w-full xl:w-[700px] text-center">
                WHAT MAKES FINITEPAY BUSINESS YOUR GROWTH PARTNER
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-items-center">
                {whyUs.map((item, index) => (
                    <div
                        className="flex flex-col md:w-[350px] w-full p-5 items-center justify-center gap-8 rounded-md bg-secondaryColor"
                        key={index}
                    >
                        <Image src={item.image} width={100} height={100} alt="descriptive image" />
                        <h1 className="text-2xl text-white text-center font-bold">{item.title}</h1>
                        <p className="text-center text-md text-white">{item.desc}</p>
                    </div>
                ))}

            </div>
            <Button text="Open a Finitepay Business Account" styles="bg-headertext rounded-lg px-4 py-3 text-white lg:w-[500px] w-full"/>
        </div>
    );
}
