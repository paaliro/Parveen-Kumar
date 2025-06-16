import ImageTag from "../Extra/ImageTag";
import { workContent, workContent2 } from "../../assets/helper";
import { WorkContent, WorkContent2 } from "../../assets/types";

const CareerOverview: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
            {/* Left Section */}
            <div className="w-full sm:w-1/2 flex flex-col gap-6">
                {workContent.map((element: WorkContent, index: number) => (
                    <div
                        key={index}
                        className="flex-1 mt-8 sm:mt-12 flex flex-col gap-2.5 bg-[#141416] rounded-xl p-6 min-h-[200px]">
                        <div className="flex my-4">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <ImageTag key={index} src={element.starPath} alt="star" width="22" height="20" />
                            ))}
                        </div>
                        <p className="text-lg text-[#daecff] flex-1">{element.text}</p>
                        <ImageTag src={element.imagePath} alt="company logo" className="pl-2 mb-4 mt-4" />
                    </div>
                ))}
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-1/2 flex flex-col gap-6">
                {workContent2.map((data: WorkContent2, index: number) => (
                    <div
                        key={index}
                        className="flex-1 p-6 rounded-xl bg-[#141416] mt-4 sm:mt-12 min-h-[200px]">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-2xl sm:text-3xl text-white">{data.header}</h1>
                            <div className="flex gap-2 items-center">
                                <ImageTag
                                    src="/images/sections/workExperience/calendar.png"
                                    alt="calendar"
                                    height="19"
                                    width="19" />
                                <p className="font-light text-[#daecff] text-sm">{data.date}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-4 flex-1">
                            <p className="font-light text-[#daecff] text-sm italic">Responsibilities</p>
                            <ul className="list-disc pl-6 flex flex-col gap-3 text-[#daecff]">
                                {data.list.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerOverview;