"use client";

import { useState } from "react";
import { faq } from "../data/faq";

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Fixed the function parameter
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="px-10 pt-10 pb-5 flex w-full items-start justify-between">
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
        </div>
    );
}
