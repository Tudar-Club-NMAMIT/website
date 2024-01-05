import Club from "./website/components/Club";
import Events from "./website/components/Events";
import Hero from "./website/components/Hero";
import StickyCursor from "./website/components/StickyCursor";

export default function Home() {
  return (
    <div className="bg-gray-900">
   <StickyCursor/>
   <Hero/>
   <Club/>
   <Events/>
    </div>
    
  );
}
