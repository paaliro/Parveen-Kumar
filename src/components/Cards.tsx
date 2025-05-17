import { cardsContent } from "../assets/helper";


const Cards = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} grid w-[90%] sm:w-[97%] gap-2 mx-5 sm:flex mt-90 sm:mt-5 mb-20`}>
            {cardsContent.map((data, index) => (
                <div key={index} className="flex-1 bg-zinc-800 rounded-2xl px-4 py-5 sm:py-7">
                    <div className="flex gap-1 text-2xl sm:text-3xl font-bold">
                        <p>{data.value}</p>
                        <p>{data.symbol}</p>
                    </div>
                    <p className="text-sm sm:text-base">{data.label}</p>
                </div>
            ))}
        </div>

    )
}

export default Cards;



