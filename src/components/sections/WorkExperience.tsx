import { workContent, workContent2 } from "../../assets/helper";
import ImageTag from "../Extra/ImageTag";
import Tag from "../Extra/Tag";

const WorkExperience = () => {
    return (
        <section className="bg-[#202123] mx-4 sm:mx-9 rounded-xl mt-10 pt-3">
            <Tag icon="💼" text="My Career Overview" />
            <p className="text-center text-2xl sm:text-4xl font-semibold mt-2 sm:mt-7">Professional Work Experience</p>

            <div className="sm:flex mx-0 sm:mx-8 container border-2 border-amber-100">

                {/* Left Section */}
                <div className="border-2 border-amber-600 w-full sm:w-[60%]">
                    {workContent.map((element, index) => (
                        <div key={index} className="mt-8 sm:mt-16 mb-4 flex flex-col gap-2.5 bg-[#141416] rounded-xl mx-4 border-2 border-blue-50">
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
                <div className="flex sm:flex-none flex-col gap-7 sm:gap-13">
                    {workContent2.map((data, index) => (
                        <div key={index} className="pl-5 sm:pl-6 px-5 mx-5 sm:mt-16 sm:w-65% h-fit py-5 rounded-xl bg-[#141416] border-2 border-blue-50">
                            <div className="flex flex-col gap-2 sm:my-2">
                                <h1 className="font-semibold text-2xl sm:text-3xl">{data.header}</h1>
                                <div className="flex gap-2 items-center">
                                    <ImageTag src="/images/sections/workExperience/calendar.png" alt="" height="19" width="19" />
                                    <p className="font-light text-[#daecff] text-sm">{data.date}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mt-4 sm:mt-0">
                                <p className="font-light text-[#daecff] text-sm italic">Responsibilities</p>
                                <ul className="list-disc pl-8 flex flex-col gap-3">
                                    <li>{data.list[0]}</li>
                                    <li>{data.list[1]}</li>
                                    <li>{data.list[2]}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>





            <p>hll</p>
        </section>
    )
}

export default WorkExperience;