interface buttonProps{
    text?:string,
    styles?:string,
    textstyle?:string,
    handlePress?:()=>void;
}
export default function Button({text,styles,textstyle,handlePress}:buttonProps){
    return(
        <div className={`flex  w-full px-4 py-2 items-center justify-center ${styles}`} onClick={handlePress}>
            <p className={textstyle}>{text}</p>
        </div>

    )
}