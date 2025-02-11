import Image from "next/image"
import { security } from "../data/security"
export default function PersonalMeasures(){
    return(
        <div className="flex items-center justify-between flex-col md:flex-row  w-full">
            {
                security.map((item,index)=>(
                    <div className={`flex flex-col w-full items-center  xl:items-start justify-center h-[350px] xl:h-[400px]  gap-8 md:py-16 py-10 ` } key={index}>
                        <Image src={item.image} width={100} height={100} alt="descriptive image"/>
                        <h1 className="text-2xl text-primaryText font-bold">{item.title}</h1>
                        <p className="xl:text-start text-center w-[350px] text-xl font-semibold text-headertext">{item.text}</p>
                        </div>
                ))
            }

        </div>
    )
}