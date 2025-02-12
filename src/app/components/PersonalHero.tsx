"use client";
import { useState } from "react";
import Button from "../utils/button";
import Image from "next/image";
import Hero from "../assets/images/hero.png"
import { selectionButtons,heroText,heroButton ,appStores} from "../data/hero";
import { useRouter } from "next/navigation";

export default function PersonalHero() {
  const [selected, setIsSelected] = useState(0); 
  const router=useRouter();
  return (
    <section className="bg-[#D4F3E1] w-full  px-10 pt-5 pb-10">
      <div className="flex flex-col w-full gap-8 items-center xl:items-start justify-between">
        <div className="flex items-center xl:flex-row flex-col gap-4 xl:gap-0 w-full justify-between">
          <h1 className="text-primaryText  text-2xl md:text-3xl font-bold">
            FinitePay
          </h1>
          <div className="flex items-center justify-center gap-5">
           
                       {selectionButtons.map((items, index) => (
                         <div key={index}>
                           <Button
                             text={items.text}
                             styles={` rounded-lg xl:text-xl text-sm cursor-pointer  ${
                               selected == index
                                 ? "bg-secondaryColor text-white"
                                 : "text-secondaryColor border-secondaryColor border-[2px]"
                             }`}
                             handlePress={()=>{setIsSelected(index)
                               router.push(items.link)
                               
                             }}
                           />
                         </div>
                       ))}
          </div>
        </div>
       <div className="flex xl:flex-row flex-col w-full items-center xl:items-start justify-between sm:gap-5 md:gap-10 xl:gap-20">
       <div className="flex flex-col w-full xl:gap-8 gap-5 items-center xl:items-start">
          <div className="flex md:flex-row flex-col md:gap-10 gap-3">
            {appStores.map((item, index) => (
              <div
                className="flex gap-3 items-center justify-center"
                key={index}
              >
                <Image
                  src={item.image}
                  width={40}
                  height={40}
                  alt={`This image is ${item.image} `}
                />
                <p className="md:text-xl text-sm text-center font-semibold text-primaryText">
                  {item.rating}
                </p>
              </div>
            ))}
          </div>
          <h1 className="xl:text-5xl text-2xl text-center md:text-start font-bold text-headertext w-full xl:w-[1000px]">
            WE POWER AFRICA’S GLOBAL AMBITIONS, BUILT FOR AFRICANS READY FOR THE
            WORLD
          </h1>
          <div className="flex flex-col gap-5 items-start w-full xl:w-[900px]">
            {
             heroText.map((item,index)=>(
                <p key={index} className="xl:text-2xl text-center md:text-start text-xl text-headertext font-semibold">{item}</p>
             ))   
            }

          </div>
          <div className="flex flex-row  items-center py-2 xl:items-start gap-2 md:gap-4  ">
            {
                heroButton.map((item,index)=>(
                    <Button text={item.text} key={index} styles={` rounded-lg shadow-md md:text-xl text-sm py-2 h-12 hover:shadow-lg  ${index %2==0 ? "bg-secondaryColor  text-white w-full md:w-[500px]":"text-secondaryColor w-[80px] border-[2px] border-secondaryColor bg-none "}`}  />
                ))
            }

          </div>
        </div>
        <Image src={Hero} width={350} height={350} alt="Hero image" className="rounded-md"/>


       </div>
      </div>
    </section>
  );
}
