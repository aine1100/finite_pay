import PersonalFeatures from "../../components/features";
import OnBoarding from "../../components/onBoarding";
import PersonalHero from "../../components/PersonalHero";
import PersonalSafety from "../../components/safety";
import Slider from "../../components/slider";
import HowItWorks from "../../components/Working";
import LogoSection from "../../utils/logoSection";

export default function PersonAccountLanding(){
    return(
        <main>
            <div className="flex flex-col ">
              <div className="gap-3 flex flex-col">
              <Slider/>
              <PersonalHero/>
              </div>
                <LogoSection/>
                <PersonalFeatures/>
                <HowItWorks/>
                <PersonalSafety/>
                <OnBoarding/>
                
            </div>
        </main>
    )
}