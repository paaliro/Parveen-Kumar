import { workContent } from "../../assets/helper";
import ImageTag from "../Extra/ImageTag";
import Tag from "../Extra/Tag";

const WorkExperience = () => {
    return (
        <section className="bg-[#202123] mx-4 sm:mx-9 rounded-xl mt-10 pt-3">
            <Tag icon="💼" text="My Career Overview" />
            <p className="text-center text-2xl sm:text-4xl font-semibold mt-2 sm:mt-7">Professional Work Experience</p>


            <div className="sm:flex gap-10 mx-0 sm:mx-8 container border-2 border-amber-100">

                {/* Left Section */}
                <div className="border-2 border-amber-600 w-full sm:w-[40%]">
                    {workContent.map((element, index) => (
                        <div key={index} className="mt-8 sm:mt-16 mb-4 flex flex-col gap-2.5 bg-[#141416] rounded-xl mx-4">
                            <div className="flex my-6 mx-7">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <ImageTag key={index} src={element.starPath} alt="star" width="22" height="20" />
                                ))}
                            </div>
                            <p className="mx-7 w-[90%] text-lg">{element.text}</p>
                            <ImageTag src={element.imagePath} alt="company logo" className="pl-6 mb-4 mt-4" />
                        </div>
                    ))}
                </div>

                {/* Right Section */}
                <div className="border-2 border-blue-100 mt-8 sm:mt-16 mb-4 mx-4 w-full sm:w-[60%]">

                    <div className="container flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-2xl sm:text-3xl">Frontend Developer</h1>
                            <div className="flex gap-2 items-center">
                                <ImageTag src="/images/sections/workExperience/calendar.png" alt="" height="19" width="19" />
                                <p className="font-light text-[#daecff] text-sm">January 2023 - Present</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-light text-[#daecff] text-sm italic">Responsibilities</p>
                            <ul className="list-disc pl-8">
                                <li>Developed and maintained user-facing features for the Hostinger website.</li>
                                <li>Collaborated closely with UI/UX designers to ensure seamless user experiences.</li>
                                <li>Optimized web  applications for maximum speed and scalability.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>





            <p>hll</p>
        </section>
    )
}

export default WorkExperience;