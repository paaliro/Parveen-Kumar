import { featureContent } from "../../assets/helper";

const FeatureCards = () => {
    return (
        <section className="flex flex-wrap justify-center gap-4 px-4">
            {featureContent.map((data, index) => (
                <div
                    key={index}
                    className="sm:w-5/16 w-full flex flex-col gap-3 bg-[#141416] rounded-lg py-5 px-7 sm:px-8">
                    <img src={data.iconPath} alt="icon" width={50} height={50} />
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-xl text-white">{data.heading}</h1>
                        <p className="text-sm text-[#D9ECFF]">{data.text}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FeatureCards;
