import { cardsContent } from "../../assets/helper";
import CountUp from 'react-countup';

const Cards = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} grid w-[95%] md:w-[95%] gap-2 mx-auto md:px-0 sm:flex mt-90 sm:mt-5`}>
            {cardsContent?.map((data, index) => (
                <div key={index} className="flex-1 bg-[#202123] rounded-lg px-4 py-5 sm:py-7">
                    <div className="flex gap-0.5 text-2xl sm:text-3xl font-bold text-white items-baseline">
                        <CountUp end={data.value} duration={1.5} />
                        <span>{data.symbol}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#D9ECFF]">{data.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;


