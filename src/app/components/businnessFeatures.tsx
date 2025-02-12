import Image from "next/image"
import userImage from "@/app/assets/images/happy3.png"
import { features } from "../data/businness"
export default function BussinnessFeatures(){
    return(
        <div className="bg-[#E9EFEC] w-full">
            <div className="flex flex-col gap-5 w-full px-20 py-10 xl:items-start items-center justify-center ">
                <h1 className="xl:text-3xl text-2xl xl:text-start text-center font-bold text-primaryText ">A TOOL THAT ACTUALLY SUPPORTS
                YOUR GROWTH</h1>
                <div className="flex xl:items-start items-center flex-col xl:flex-row justify-between w-full">
                    <div className="flex flex-col items-start gap-8">
                        <p className="text-headertext text-md xl:text-start text-center">FinitePay isn&apos;t just another payment platform; we are your growth partner.</p>
                        <p className="text-headertext text-md xl:text-start text-center xl:w-[700px] w-full">Whether you&apos;re an individual managing your finances or a business scaling up, our features are designed to support your financial journey. From seamless transactions to powerful insights, we’re here to help you succeed, every step of the way.</p>
                        {
                            features.map((item,index)=>(
                                <div key={index} className="flex xl:items-start items-center justify-center xl:justify-start flex-col gap-5 w-full">
                                    <div className="w-full h-[1.5px] bg-primaryText"></div>
                                    <div className="flex gap-5 flex-col xl:flex-row xl:items-start items-center justify-center xl:justify-start ">
                                        <Image src={item.image} alt="image" height={100} width={100} className="rounded-md"/>
                                        <div className="flex flex-col xl:items-start items-center justify-center xl:justify-start">
                                            <h1 className="text-primaryText text-md text-center xl:text-start font-semibold">{item.title}</h1>
                                            <p className="text-md w-full xl:w-[700px] text-center xl:text-start">{item.desc}</p>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>
                    <Image src={userImage} height={350} width={350} alt="user image" className="rounded-md pt-4"/>

                </div>

            </div>

        </div>
    )
}