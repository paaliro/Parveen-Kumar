import AnimationWords from "../AnimationWords"
import Button from "../Button"
import HeroExperience from "../HeroModels/HeroExperience"

function Hero() {
    return (
        <>
            <section id="Hero" className="relative overflow-hidden">
                <div className="absolute top-0 left-0 z-10 w-screen">
                    <img src="/images/bg.png" alt="background" />
                </div>
                {/* Left : Hero Content */}
                <header className="flex flex-col justify-center w-screen">
                    <div className="flex flex-col hero-text text-2xl sm:text-5xl font-semibold text-start ml-5 sm:ml-25 mt-20 sm:mt-65 w-fit">
                        <div className="flex justify-start items-center z-99">
                            <h1>Shapping</h1>
                            <AnimationWords />
                        </div>
                        <h1 className="sm:mt-2 z-99">into Real Projects</h1>
                        <h1 className="z-99">that Deliver Results</h1>
                        <p className="text-white-50 text-sm sm:text-lg mt-5 font-normal z-99">
                            Hi, i'm <b>Parveen</b>, a developer based in india with a passion for code.
                        </p>
                        <Button />
                    </div>
                </header>
            </section>
            {/* Right : 3d Model */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </>
    )
}

export default Hero