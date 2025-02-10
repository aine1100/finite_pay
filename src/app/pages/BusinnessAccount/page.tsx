import BusinnesHero from "@/app/components/businessHero";
import BussinnessSecurity from "@/app/components/businessSec";
import BusinnessCountries from "@/app/components/businnesCountries";
import BussinnessFeatures from "@/app/components/businnessFeatures";
import FaqPage from "@/app/components/faq";
import Footer from "@/app/components/footer";
import Slider from "@/app/components/slider";
import Testimonials from "@/app/components/testimonial";
import WhyBusinnessPatrner from "@/app/components/whyfinite";

export default function BusinnessAccountLanding(){
    return(
       <main>
                   <div className="flex flex-col ">
                     <div className="gap-3 flex flex-col">
                     <Slider/>
                     <BusinnesHero/>
                     </div>
                     <BusinnessCountries/>
                     <BussinnessFeatures/>
                     <BussinnessSecurity/>
                     <WhyBusinnessPatrner/>
                     <Testimonials/>
                     <FaqPage/>
                     <Footer/>
                     
                      
                       
                   </div>
               </main>
    )
}