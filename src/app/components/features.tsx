import Image from "next/image"
import { features } from "../data/feature"
export default function PersonalFeatures(){
    return(
        <div className="flex items-start justify-center flex-col md:flex-row  w-full">
            {
                features.map((item,index)=>(
                    <div className={`flex flex-col w-full px-10 items-center justify-center h-[400px]  gap-8 md:py-16 py-10 ${index%2==0 ? "bg-cardOneBg":"bg-cardTwoBg"}` } key={index}>
                        <Image src={item.image} width={100} height={100} alt="descriptive image"/>
                        <h1 className="text-2xl text-primaryText font-bold">{item.title}</h1>
                        <p className="text-center w-[350px] text-xl font-semibold text-headertext">{item.text}</p>
                        </div>
                ))
            }

        </div>
    )
}