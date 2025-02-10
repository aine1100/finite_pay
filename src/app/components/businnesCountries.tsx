import { flags } from "../data/businness";
import Image from "next/image";
export default function BusinnessCountries(){
    return(
        <div className="flex items-center justify-center bg-[#D4F3E1] w-full flex-col gap-8 p-8">
            <h1 className="xl:text-3xl text-2xl font-bold text-primaryText">Currently available in 38 African countries</h1>
            <p className="text-headertext text-md w-full xl:w-[800px] text-center">Whether you’re in Kenya, Nigeria, South Africa, or anywhere in between, you can count on us to provide fast, secure, and affordable financial services—no matter where you are.</p>
            <div className="flex flex-wrap xl:flex-nowrap gap-4 items-center justify-center">
                {
                    flags.map((item,index)=>(
                        <Image  key={index} src={item} alt="country flag" height={100} width={100}/>
                    ))
                }

            </div>

        </div>
    )
}