import { workContent } from "../../assets/helper";
import ImageTag from "../Extra/ImageTag";
import Tag from "../Extra/Tag";

const WorkExperience = () => {
    return (
        <section className="bg-[#202123] mx-4 sm:mx-9 rounded-xl mt-10 pt-3">
            <Tag icon="💼" text="My Career Overview" />
            <p className="text-center text-2xl sm:text-4xl font-semibold mt-1">Professional Work Experience</p>


            <div className="sm:flex gap-4 mx-0 sm:mx-8"></div>

            {workContent.map((element, index) => (
                <div key={index} className="mt-8 sm:mt-16 mb-4 flex flex-col sm:w-2/6 gap-2.5 bg-[#141416] rounded-xl mx-4 sm:mx-18">
                    <div className="flex my-6 mx-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <ImageTag key={index} src={element.starPath} alt="star" width="22" height="20" />
                        ))}
                    </div>
                    <p className="mx-4 w-90% h-25">{element.text}</p>
                    <ImageTag src={element.imagePath} alt="company logo" width="" height="" className="pl-6 mb-4 mt-4" />
                </div>
            ))}

           




            <p>hll</p>
        </section>
    )
}

export default WorkExperience;