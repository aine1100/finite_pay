import PersonalWork from "./work";

export default function HowItWorks(){
    return(
        <div className="flex flex-col px-10 py-16 items-center justify-center gap-8 w-full">
            <h1 className="xl:text-4xl text-2xl font-bold text-primaryText">HOW IT WORKS</h1>
            <p className="text-xl font-semibold text-center">Setting up your FinitePay account is quick and easy, with all transactions secured to give you peace of mind.</p>
            <PersonalWork/>

        </div>
    )
}