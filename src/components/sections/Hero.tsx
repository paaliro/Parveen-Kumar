const words = [
    { text: 'ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' }
]


function Hero() {
    return (
        <section id="Hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* Left : Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text text-4xl">
                            <h1>Shapping</h1>
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