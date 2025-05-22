import ImageTag from "../Extra/ImageTag";
import Tag from "../Extra/Tag";

const WorkExperience = () => {
    return (
        <section className="bg-[#202123] mx-4 sm:mx-9 rounded-xl mt-10 pt-3">
            <Tag icon="💼" text="My Career Overview" />
            <p className="text-center text-2xl sm:text-4xl font-semibold mt-1">Professional Work Experience</p>

            <div className="my-20 flex flex-col gap-2.5">
                <div className="flex mt-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ImageTag key={index} src="/images/sections/workExperience/star.svg" alt="star" width="22" height="20" />
                    ))}
                </div>
                <p>Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.</p>
                <ImageTag src="/images/sections/workExperience/hostinger.png" alt="company logo" width="" height="" />
            </div>

        </section>
    )
}

export default WorkExperience;