import Image from "next/image"
import { OnBoardingOne,OnBoardingTwo, usingCauses } from "../data/OnBoarding"
export default function OnBoarding(){
    return(
        <div className="flex flex-col items-center gap-10 w-full xl:mt-10 justify-center px-10 py-16">
            {
                OnBoardingOne.map((item,index)=>(
                    <div className="flex gap-5 items-start px-14 py-8 justify-center bg-secondaryColor rounded-md">
                        <div className="flex flex-col gap-8 ">
                            <h1 className="text-white font-bold text-2xl w-full xl:w-[400px]">{item.title}</h1>
                            <p className="text-white font-medium  text-xl w-full xl:w-[800px]">{item.text}</p>
                            <p className=" font-medium text-white  text-xl w-full xl:w-[800px]">{item.text2}</p>
                            </div>
                            <Image src={item.image} alt="" width={400} height={400} className="xl:-mt-20 rounded-md"/>
                        </div>
                ))
            }
             {
                OnBoardingTwo.map((item,index)=>(
                    <div className="flex gap-14 items-center px-14 py-8 justify-center  rounded-md">
                         <Image src={item.image} alt="" width={460} height={460} className="rounded-md"/>
                        <div className="flex flex-col gap-10 ">
                            <h1 className="text-primaryText font-bold xl:text-4xl text-2xl w-full xl:w-[450px] ">{item.title}</h1>
                            <p className=" font-medium text-2xl w-full xl:w-[800px]">{item.text}</p>
                            </div>
                           
                        </div>
                ))
            }
          <h1 className="xl:text-3xl text-2xl font-bold text-primaryText ">Why You'll Love Your FinitePay Card</h1>
          <div className="flex items-center justify-center flex-col md:flex-row  w-full">
            {
                usingCauses.map((item,index)=>(
                    <div className={`flex flex-col w-full gap-3 px-10 items-center justify-center py-8 h-[200px] ` } key={index}>
                       
                        <h1 className="text-2xl text-primaryText font-bold">{item.title}</h1>
                        <p className="text-center w-[350px] text-xl font-semibold text-headertext">{item.text}</p>
                        </div>
                ))
            }

        </div>

        </div>
    )
}