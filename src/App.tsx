import Cards from "./components/Extra/Cards"
import Tag from "./components/Extra/Tag"
import FeatureCards from "./components/sections/FeatureCards"
import Hero from "./components/sections/Hero"
import Logos from "./components/sections/Logos"
// import NavBar from "./components/sections/NavBar"
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
            <FeatureCards />
            <Tag icon="💼" text="My Career Overview" />
            <WorkExperience />
        </div>
    )
}

export default App