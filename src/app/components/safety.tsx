import PersonalMeasures from "./measures";

export default function PersonalSafety(){
    return(
        <div className="w-full bg-safetyBg py-10   xl:px-24 px-10 flex flex-col gap-8 items-start justify-center">
            <h1 className="xl:text-4xl text-2xl  font-bold text-primaryText">YOUR SAFETY COMES FIRST</h1>
            <p className="text-xl font-semibold">From encryption to fraud detection, your transactions are safe and secure, whether you&apos;re sending money or managing your business.</p>
            <PersonalMeasures/>

        </div>
    )
}