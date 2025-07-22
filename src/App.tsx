import Cards from "./components/Extra/Cards"
import FeatureCards from "./components/sections/FeatureCards"
import { featureContent } from "./assets/helper"
import Hero from "./components/sections/Hero"
import Logos from "./components/sections/Logos"
import ShowCase from "./components/sections/ShowCase"
import WorkExperience from "./components/sections/WorkExperience"
 
function App() {
    return (
        <div className="mx-auto">
            {/* <NavBar className="z-100000000" /> */}
            <Hero />
            <Cards />
            <ShowCase /> 
            <Logos />
            <FeatureCards structure={featureContent} />
            <WorkExperience />
        </div>
    )
}
 
export default App