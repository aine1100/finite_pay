import Image from "next/image"
import { OnBoardingOne,OnBoardingTwo, usingCauses } from "../data/OnBoarding"
export default function OnBoarding(){
    return(
        <div className="flex flex-col items-center gap-10 w-full xl:mt-10 justify-center px-10 pt-16 pb-5">
            {
                OnBoardingOne.map((item,index)=>(
                    <div className="flex gap-5 xl:flex-row flex-col items-center xl:items-start px-4 md:px-14 py-8 justify-center bg-secondaryColor rounded-md" key={index}>
                        <div className="flex flex-col gap-8 ">
                            <h1 className="text-white font-bold text-center text-xl md:text-2xl w-full xl:w-[400px]">{item.title}</h1>
                            <p className="text-white md:font-medium text-md md:text-xl w-full xl:w-[800px]">{item.text}</p>
                            <p className=" md:font-medium text-white text-md md:text-xl w-full xl:w-[800px]">{item.text2}</p>
                            </div>
                            <Image src={item.image} alt="" width={400} height={400} className="xl:-mt-20 rounded-md"/>
                        </div>
                ))
            }
             {
                OnBoardingTwo.map((item,index)=>(
                    <div className="flex xl:flex-row flex-col gap-14 items-center px-4 md:px-14 py-8 justify-center  rounded-md" key={index}>
                         <Image src={item.image} alt="" width={460} height={460} className="rounded-md"/>
                        <div className="flex flex-col gap-10 ">
                            <h1 className="text-primaryText text-center md:text-start font-bold xl:text-4xl text-2xl w-full xl:w-[450px] ">{item.title}</h1>
                            <p className=" font-medium text-center md:text-start text-2xl w-full xl:w-[800px]">{item.text}</p>
                            </div>
                           
                        </div>
                ))
            }
          <h1 className="xl:text-3xl text-2xl font-bold text-primaryText text-center md:text-start">Why You&apos;ll Love Your FinitePay Card</h1>
          <div className="flex items-center justify-center flex-wrap xl:flex-nowrap  w-full">
            {
                usingCauses.map((item,index)=>(
                    <div className={`flex flex-col w-full gap-3 md:px-10 px-4 items-center justify-center py-8 h-[150px] md:h-[200px] ` } key={index}>
                       
                        <h1 className="md:text-2xl text-xl text-center xl:text-start text-primaryText font-bold">{item.title}</h1>
                        <p className=" w-[350px] text-center xl:text-start text-xl font-semibold text-headertext">{item.text}</p>
                        </div>
                ))
            }

        </div>

        </div>
    )
}