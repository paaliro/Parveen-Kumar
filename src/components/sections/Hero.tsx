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
                <header className="flex flex-col justify-center sm:w-full w-screen">
                        <div className="flex flex-col hero-text text-2xl sm:text-4xl text-start sm:text-center ml-4 mt-20 sm:mt-15">
                            <div className="flex sm:justify-center items-center">
                                <h1>Shapping</h1>
                                <div className="slide h-[46px] overflow-hidden">
                                    <div className="wrapper flex flex-col animate-slide">
                                        {words.map((word, index) => (
                                            <div key={index} className="flex items-center gap-1 pl-2 pb-2 h-[60px]">
                                                <img src={word.imgPath} alt={word.text} className="w-7 sm:w-8 h-7 sm:h-8 bg-white rounded-full p-1" />
                                                <span>{word.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                            <p className="text-white-50 text-sm sm:text-xl mt-5">
                                Hi, i'm Parveen, a developer based in india with a passion for code.
                            </p>
                        </div>
                </header>
                {/* Right : 3d Model */}
            </div>
        </section>
    )
}

export default Hero