import PersonalHero from "../components/PersonalHero";
import Slider from "../components/slider";

export default function PersonAccountLanding(){
    return(
        <main>
            <div className="flex flex-col gap-10">
                <Slider/>
                <PersonalHero/>
                
            </div>
        </main>
    )
}