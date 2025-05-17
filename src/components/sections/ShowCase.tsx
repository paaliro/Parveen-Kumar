import ImageTag from "../Extra/ImageTag";


const ShowCase = () => {
    return (
        <div className="sm:flex justify-center gap-10 mx-7 mt-8 vw-100">
            <div className="sm:flex flex-col justify-center mb-4 sm:mb-0 sm:w-7/12">
                <ImageTag src="/images/sections/showCase/img-1.png" alt="showCase-img-1" className="flex justify-center" />
                <div className="px-2 sm:ml-7 mt-1 leading-7 sm:leading-normal">
                    <h1 className="text-[1.35rem] sm:text-3xl font-semibold">On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h1>
                    <p className="text-xs sm:text-base text-[#D9ECFF]">An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div>
                    <ImageTag src="/images/sections/showCase/img-2.png" alt="showCase-img-2" />
                    <h1 className="font-semibold text-xl sm:text-2xl mt-1 ml-2">The Library Management Platform</h1>
                </div>
                <div>
                    <ImageTag src="/images/sections/showCase/img-3.png" alt="showCase-img-3" />
                    <h1 className="font-semibold text-xl sm:text-2xl mt-1 ml-2">YC Directory - A Startup Showcase App</h1>
                </div>
            </div>
        </div>
    )
}

export default ShowCase;