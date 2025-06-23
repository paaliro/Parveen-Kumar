import { peopleTalk } from "../../assets/helper";
import ImageTag from "./ImageTag";
import Tag from "./Tag";

const CustomerFeedback = () => {
    // Chunk array into groups of 2 for each column
    const chunkedTalk = Array.from({ length: 3 }, (_, i) =>
        peopleTalk.slice(i * 2, (i + 1) * 2)
    );

    return (
        <section className="max-w-7xl mx-auto mt-10 px-4">
            <Tag icon="⭐" text="Customer feedback" className="mb-6" />
            <h1 className="text-center font-semibold text-2xl sm:text-4xl mb-6">
                What People Say? 
            </h1>
 
            <div className="grid sm:grid-cols-3 gap-6">
                {chunkedTalk.map((chunk, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-6">
                        {chunk.map((data, index) => (
                            <div
                                key={`${colIndex}-${index}`}   
                                className="bg-[#141416] rounded-lg p-4 border border-amber-200 min-h-fit">
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <ImageTag key={starIndex} src={data.starPath} alt="star" width="20" height="20" />
                                    ))}
                                </div>
                                <p className="text-[#D9ECFF] mb-4 text-balance">{data.text}</p>
                                <div className="flex items-center gap-3">
                                    <ImageTag alt={data.name} src={data.profile} width="36" height="36" />
                                    <div>
                                        <p className="font-semibold text-white">{data.name}</p>
                                        <p className="text-xs text-[#D9ECFF]">{data.userName}</p>
                                    </div> 
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerFeedback;