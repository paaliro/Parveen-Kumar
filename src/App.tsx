import Cards from "./components/Extra/Cards"
import FeatureCards from "./components/sections/FeatureCards"
import Hero from "./components/sections/Hero"
import Logos from "./components/sections/Logos"
// import NavBar from "./components/sections/NavBar"
import ShowCase from "./components/sections/ShowCase"

function App() {
    return (
        <div className="mx-auto">
            {/* <NavBar className="z-100000000" /> */}
            <Hero />
            <Cards />
            <ShowCase />
            <Logos />
            <FeatureCards />
        </div>
    )
}

export default App