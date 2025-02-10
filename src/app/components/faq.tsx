"use client";

import { useState } from "react";
import { faq } from "../data/faq";
import Button from "../utils/button";

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Fixed the function parameter
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="px-10 pt-5 xl:pt-16 pb-5 flex w-full items-start xl:justify-center xl:gap-20 justify-between">
            <div className="flex flex-col gap-5 w-full xl:w-[900px] bg-[#D4F3E1] p-4 rounded-md">
                {faq.map((item, index) => (
                    <div key={index} className="flex px-3 gap-4 flex-col">
                        {/* Title and Toggle Button */}
                        <div className="w-full flex justify-between cursor-pointer" onClick={() => toggleFaq(index)}>
                            <h3 className="text-primaryText text-md font-semibold">{item.title}</h3>
                            <p className="text-secondaryColor font-bold text-2xl">
                                {openIndex === index ? "−" : "+"}
                            </p>
                        </div>

                        {/* Conditionally show description */}
                        {openIndex === index && (
                            <p className="text-md w-full">{item.description}</p>
                        )}
                        
                        {/* Divider */}
                        <div className="w-full bg-primaryText rounded-md h-[1.4px]"></div>
                    </div>
                ))}
              
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h1 className="xl:text-3xl text-2xl font-bold text-primaryText">Frequently</h1>
                <h1 className="xl:text-3xl text-2xl font-bold text-primaryText">Asked</h1>
                <h1 className="xl:text-3xl text-2xl font-bold text-primaryText">Questions</h1>
                <h1 className="text-xl text-secondaryColor font-bold">Anymore questions</h1>
                <p className="text-primaryText">Lets get Your answer</p>
    
                <Button text="Contact Us" styles={`bg-headertext text-white w-14 h-14 rounded-md`}/>

              </div>
        </div>
    );
}
