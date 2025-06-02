import { peopleTalk } from "../../assets/helper";
import ImageTag from "./ImageTag";
import Tag from "./Tag";

const CustomerFeedback = () => {
    return (
        <section className=" w-95vw mt-15">
            <Tag icon="⭐" text="Customer feedback highlights" />
            <h1 className="text-center font-semibold text-2xl sm:text-4xl w-90vw mb-10">What People Say About Me?</h1>

            <div className="sm:grid grid-cols-3 items-baseline sm:mx-14 h-fit border-1 border-amber-50 pb-3">
                {peopleTalk.map((data, index) => (
                    <div key={index} className="sm:w-[95%] sm:h-fit bg-[#141416] mx-6 sm:mx-auto mt-4 rounded-lg pb-1 sm:pb-0 pt-1 sm:pt-0 border-1 border-amber-200">
                        <div className="flex my-5 mx-5">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <ImageTag key={index} src={data.starPath} alt="star" width="22" height="20" />
                            ))}
                        </div>
                        <p className="mx-5 text-balance text-[#D9ECFF]">
                            {data.text} 
                        </p> 
                        <div className="mt-6 flex gap-3 mx-5 my-5 items-center">
                            <ImageTag alt="person-1" src={data.profile} width="38" height="38" />
                            <div>
                                <p className="font-semibold">{data.name}</p>
                                <p className="font-light text-xs text-[#D9ECFF]">{data.userName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CustomerFeedback;