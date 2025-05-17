import Cards from "./components/Extra/Cards"
import Hero from "./components/sections/Hero"
import ShowCase from "./components/sections/ShowCase"

function App() {
    return (
        <div className="mx-auto">
            <Hero />
            <Cards />
            <ShowCase />
        </div>
    )
}

export default App