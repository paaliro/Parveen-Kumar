const words = [
    { text: 'ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
    { text: 'ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' }
]

function Hero() {
    return (
        <section id="Hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10 ">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* Left : Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen">
                    <div className="flex flex-col">
                        <div className="hero-text text-2xl sm:text-4xl text-center">
                            <div className="flex justify-center items-center gap-0">
                                <h1>Shapping</h1>
                                <div className="slide h-[60px] overflow-hidden">
                                    <div className="wrapper flex flex-col animate-slide">
                                        {words.map((word, index) => (
                                            <div key={index} className="flex items-center gap-1 p-2 h-[60px]">
                                                <img src={word.imgPath} alt={word.text} className="w-7 h-7 bg-white rounded-full p-1" />
                                                <span>{word.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                    </div>
                </header>
                {/* Right : 3d Model */}
            </div>
        </section>
    )
}

export default Hero