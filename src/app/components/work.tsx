import Image from "next/image"
import { work } from "../data/work"

export default function PersonalWork(){
    return(
        <div className="flex items-start justify-center flex-wrap xl:flex-nowrap  w-full">
            {
                work.map((item,index)=>(
                    <div className={`flex flex-col w-full px-10 items-center justify-center h-[400px]  gap-8 md:py-16 py-10 ` } key={index}>
                        <Image src={item.image} width={100} height={100} alt="descriptive image"/>
                        <h1 className="text-2xl text-center text-primaryText font-bold">{item.title}</h1>
                        <p className="text-center w-[350px] text-xl font-semibold text-headertext">{item.text}</p>
                        </div>
                ))
            }

        </div>
    )
}