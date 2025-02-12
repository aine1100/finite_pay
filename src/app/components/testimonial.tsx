import { icons, testimonial } from "../data/testimonial";
import Image from "next/image";

export default function Testimonials(){
    return(
        <div className="w-full flex flex-col gap-8 px-10 items-center xl:items-start py-2">
            <h1 className="xl:text-4xl text-2xl font-bold text-primaryText">TRUSTED BY PEOPLE LIKE YOU</h1>
            <div className="flex xl:items-start xl:flex-row flex-col items-center w-full justify-between">
                <div className="flex flex-col gap-3">
                    <p className="text-headertext text-xl text-center xl:text-start xl:w-[700px] w-full">Hear directly from our users who are sending money home, managing their business payments, and enjoying the simplicity of global transactions.</p>
                    <p className="text-headertext text-xl text-center xl:text-start xl:w-[700px] w-full">See why they trust us to handle their finances with ease.</p>
                    <div className="flex items-center justify-center gap-10 pt-4 pb-4">
                        {
                            icons.map((item,index)=>(
                                <div key={index} className="bg-secondaryColor w-14 h-14 rounded-full flex items-center justify-center">
                                    <Image src={item} alt="icon" width={20} height={20} />
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className="bg-gray-200 w-full xl:w-[600px] p-5 flex items-center justify-center rounded-md">
                    <div className="bg-[#D4F3E1] w-full p-2 rounded-md">
                        {
                            testimonial.map((item,index)=>(
                                <div key={index} className="flex flex-wrap md:flex-nowrap items-center xl:items-start gap-10 justify-center xl:justify-start w-full p-2">
                                    <Image src={item.image} className="rounded-full w-16 h-16" height={100} width={100} alt="person image" />
                                    <div className="flex flex-col  gap-3">
                                        <h2 className="text-headertext md:text-start text-center font-semibold text-xl">{item.name}</h2>
                                        <h3 className="font-semibold text-md md:text-start text-center">{item.work}</h3>
                                        <p className="text-md md:text-start text-center">{item.testimony}</p>
                                    </div>
                                    </div>
                            ))
                        }

                    </div>

                </div>

            </div>
            
        </div>
    )
}