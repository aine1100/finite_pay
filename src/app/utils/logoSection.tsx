import mpesa from "../assets/images/mpesa.png"
import airtel from "../assets/images/Airtermoney.png"
import mastercard from "../assets/images/Mastercardlogo.png"
import Image from "next/image"

export default function LogoSection(){
    const patners=[
        mpesa,airtel,mastercard
    ]
    return(
        <div className="w-full py-5 h-[80px] flex items-center flex-shrink-0 justify-center md:gap-10 gap-5 bg-logoSection">
            {
                patners.map((item,index)=>(
                    <Image src={item} width={100} height={100} alt={`This is patner ${index} `} key={index}/>
                ))

            }

        </div>
    )
}
