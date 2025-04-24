import Button from "../Button"

const words = [
    { text: 'ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
]

function Hero() {
    return (
        <section id="Hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10 w-screen sm:w-full">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* Left : Hero Content */}
                <header className="flex flex-col justify-center w-screen">
                    <div className="flex flex-col hero-text text-2xl sm:text-5xl font-bold text-start ml-5 mt-20 sm:mt-65 w-fit">
                        <div className="flex justify-start items-center">
                            <h1>Shapping</h1>
                            <div className="slide h-[46px] overflow-hidden">
                                <div className="wrapper flex flex-col animate-slide">
                                    {words.map((word, index) => (
                                        <div key={index} className="flex items-center gap-1 pl-2 pb-2 h-[60px]">
                                            <img src={word.imgPath} alt={word.text} className="w-7 sm:w-10 h-7 sm:h-10 bg-white rounded-full p-1" />
                                            <span>{word.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h1 className="sm:mt-2">into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                        <p className="text-white-50 text-sm sm:text-lg mt-5 font-normal">
                            Hi, i'm <b>Parveen</b>, a developer based in india with a passion for code.
                        </p>
                        <Button />
                    </div>
                </header>
                {/* Right : 3d Model */}
            </div>
        </section>
    )
}

export default Hero