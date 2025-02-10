"use client";
import { useState } from "react";
import Button from "../utils/button";
import Image from "next/image";
import Hero from "../assets/images/hero2.png"
import { selectionButtons,heroText ,appStores, businessHeroButton} from "../data/hero";
import { useRouter } from "next/navigation";

export default function BusinnesHero() {
  const [selected, setIsSelected] = useState(1); 
  const router=useRouter();
  return (
    <section className="bg-headertext w-full  px-10 pt-5 pb-10">
      <div className="flex flex-col w-full gap-8 items-start justify-between">
        <div className="flex flex-row-reverse items-center w-full justify-between">
          <h1 className="text-white  text-3xl font-bold">
            FinitePay
          </h1>
          <div className="flex items-center justify-center gap-5">
            {selectionButtons.map((items, index) => (
              <div key={index}>
                <Button
                  text={items.text}
                  styles={` rounded-lg text-xl cursor-pointer  ${
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
       <div className="flex flex-row-reverse w-full items-start justify-between gap-20">
       <div className="flex flex-col w-full gap-8 items-start">
          <div className="flex md:gap-10 gap-3">
            {appStores.map((item, index) => (
              <div
                className="flex gap-3 items-center justify-center"
                key={index}
              >
                <Image
                  src={item.image}
                  width={40}
                  height={40}
                  alt={`This image is ${item.image}`}
                />
                <p className="text-xl font-semibold text-white">
                  {item.rating}
                </p>
              </div>
            ))}
          </div>
          <h1 className="xl:text-5xl text-3xl font-bold text-white w-full xl:w-[1000px]">
            WE POWER AFRICA’S GLOBAL AMBITIONS, BUILT FOR AFRICANS READY FOR THE
            WORLD
          </h1>
          <div className="flex flex-col gap-5 items-start w-full xl:w-[900px]">
            {
             heroText.map((item,index)=>(
                <p key={index} className="text-2xl text-white font-semibold">{item}</p>
             ))   
            }

          </div>
          <div className="flex items-start gap-8  ">
            {
                businessHeroButton.map((item,index)=>(
                    <Button text={item.text} key={index} styles={` rounded-lg shadow-md text-xl py-2 h-12 hover:shadow-lg  ${index %2==0 ? "bg-secondaryColor  text-white w-full md:w-[600px]":"text-secondaryColor w-[80px] border-[2px] border-secondaryColor bg-none "}`}  />
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
