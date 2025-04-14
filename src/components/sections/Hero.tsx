const words = [
    { text: 'ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' }
]


function Hero() {
    return (
        <section id="Hero" className="">
            {/* Left Section */}
            <header>
                <div className="text-4xl text-center pt-10">
                    <h1 className="flex gap-4">Shaping
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center justify-center md:gap-3 gap-1 pb-2">
                                        <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="md:size-10 size-7 p-1 rounded-full bg-white-50" />
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                </div>
            </header>


            {/* Right Section */}

        </section>
    )
}

export default Hero