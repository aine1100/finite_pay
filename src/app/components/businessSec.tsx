import Image from "next/image"
import sets from "@/app/assets/images/sets.png"
import securityImage from "@/app/assets/images/security.png"
import { busecurity } from "../data/businness"
export default function BussinnessSecurity(){
    return(
        <div className="flex flex-col items-center justify-center w-full gap-8 px-20 py-10">
            <div className="bg-headertext px-8 py-5 rounded-lg xl:-ml-80 gap-6 flex items-center justify-center">
                <Image src={sets} alt="24/7 support image" width={40} height={40}/>
                <h1 className="text-2xl font-bold text-white">24/7 Support</h1>

            </div>
            <div className="flex w-full items-center gap-10 justify-center">
                <h1 className="xl:text-4xl text-2xl text-primaryText font-bold">SERIOUS ABOUT SECURITY</h1>
                <Image src={securityImage} alt="security lock" width={150} height={150}/>

            </div>
            <p className="w-full text-headertext text-xl">From encryption to fraud detection, your transactions are safe and secure, whether you&apos;re sending money or managing your business.</p>
            <div className="flex items-center justify-between flex-col md:flex-row  w-full px-10">
            {
                busecurity.map((item,index)=>(
                    <div className={`flex flex-col w-full  items-start justify-center h-[400px]  gap-8 md:py-16 py-10 ` } key={index}>
                        <Image src={item.image} width={100} height={100} alt="descriptive image"/>
                        <h1 className="text-2xl text-primaryText font-bold">{item.title}</h1>
                        <p className="text-start w-[350px] text-xl font-semibold text-headertext">{item.text}</p>
                        </div>
                ))
            }

        </div>

        </div>
    )
}