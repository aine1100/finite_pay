"use client";
import logos from "../constants/icon";
import { useState } from "react";
import Button from "../utils/button";
import Image from "next/image";
import Hero from "../assets/images/hero.png"
import { selectionButtons,heroText,heroButton ,appStores} from "../data/hero";

export default function PersonalHero() {
  const [selected, setIsSelected] = useState(0); 
  return (
    <section className="bg-[#D4F3E1] w-full  px-10 pt-5 pb-10">
      <div className="flex flex-col w-full gap-8 items-start justify-between">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-primaryText  text-3xl font-bold">
            FinitePay
          </h1>
          <div className="flex items-center justify-center gap-5">
            {selectionButtons.map((items, index) => (
              <div key={index}>
                <Button
                  text={items.text}
                  styles={` rounded-lg text-xl ${
                    selected == index
                      ? "bg-secondaryColor text-white"
                      : "text-secondaryColor border-secondaryColor border-[2px]"
                  }`}
                  handlePress={()=>setIsSelected(index)}
                />
              </div>
            ))}
          </div>
        </div>
       <div className="flex w-full items-start justify-between gap-20">
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
                <p className="text-xl font-semibold text-primaryText">
                  {item.rating}
                </p>
              </div>
            ))}
          </div>
          <h1 className="xl:text-5xl text-3xl font-bold text-headertext w-full xl:w-[1000px]">
            WE POWER AFRICA’S GLOBAL AMBITIONS, BUILT FOR AFRICANS READY FOR THE
            WORLD
          </h1>
          <div className="flex flex-col gap-5 items-start w-full xl:w-[900px]">
            {
             heroText.map((item,index)=>(
                <p key={index} className="text-2xl text-headertext font-semibold">{item}</p>
             ))   
            }

          </div>
          <div className="flex items-start gap-8  ">
            {
                heroButton.map((item,index)=>(
                    <Button text={item.text} key={index} styles={` rounded-lg shadow-md text-xl py-2 h-12 hover:shadow-lg  ${index %2==0 ? "bg-secondaryColor  text-white w-full md:w-[500px]":"text-secondaryColor w-[90px] border-[2px] border-secondaryColor bg-none "}`}  />
                ))
            }

          </div>
        </div>
        <Image src={Hero} width={500} height={500} alt="Hero image" className="rounded-md"/>


       </div>
      </div>
    </section>
  );
}
