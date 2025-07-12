import { useRef } from "react";
import ImageTag from "../Extra/ImageTag";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation when card appear
const ShowCase = () => {
    const sectionRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    useGSAP(() => {
        const images = [
            image1Ref.current,
            image2Ref.current,
            image3Ref.current
        ]
        images.forEach((image, index) => {
            gsap.fromTo(
                image,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: image,
                        start: "top bottom-=100",
                    },
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, [])

    return (
        <section ref={sectionRef} className="sm:flex justify-center gap-0 md:gap-10 mt-8 vw-100 bg-[#202123] rounded-lg py-4 md:py-8 mx-4 md:mx-8 px-4 md:px-0 ">
            <div ref={image1Ref} className="sm:flex flex-col justify-center mb-4 sm:mb-0 sm:w-7/12 ">
                <ImageTag src="/images/sections/showCase/img-1.png" alt="showCase-img-1" className="flex justify-center w-full mx-auto" />
                <div className="px-2 mt-1 leading-7 sm:leading-normal text-center">
                    <h1 className="text-lg md:text-3xl font-semibold">On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h1>
                    <p className="text-xs md:text-base text-[#D9ECFF]">An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 ">
                <div ref={image2Ref} className="mt-5">
                    <ImageTag src="/images/sections/showCase/img-2.png" alt="showCase-img-2" className="w-full mx-auto" />
                    <h1 className="font-semibold text-lg sm:text-xl mt-1 ml-2 text-center">The Library Management Platform</h1>
                </div>
                <div ref={image3Ref} >
                    <ImageTag src="/images/sections/showCase/img-3.png" alt="showCase-img-3" className="w-full mx-auto" />
                    <h1 className="font-semibold text-lg sm:text-xl mt-1 ml-2 text-center">YC Directory - A Startup Showcase App</h1>
                </div>
            </div>
        </section>
    )
}

export default ShowCase;