import BusinnesHero from "@/app/components/businessHero";
import BusinnessCountries from "@/app/components/businnesCountries";
import Slider from "@/app/components/slider";

export default function BusinnessAccountLanding(){
    return(
       <main>
                   <div className="flex flex-col ">
                     <div className="gap-3 flex flex-col">
                     <Slider/>
                     <BusinnesHero/>
                     </div>
                     <BusinnessCountries/>
                      
                       
                   </div>
               </main>
    )
}