import Testimonials from "@/app/components/testimonial";
import PersonalFeatures from "@/app/components/features";
import OnBoarding from "@/app/components/onBoarding";
import PersonalHero from "@/app/components/PersonalHero";
import PersonalSafety from "@/app/components/safety";
import Slider from "@/app/components/slider";
import HowItWorks from "@/app/components/Working";
import LogoSection from "@/app/utils/logoSection";
import FaqPage from "@/app/components/faq";

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
                <Testimonials/>
                <FaqPage/>
                
            </div>
        </main>
    )
}