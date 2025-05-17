import { words } from "../../assets/helper";

const AnimationWords = () => {
    return (
        <div className="slide h-[46px] overflow-hidden">
            <div className="wrapper flex flex-col animate-slide">
                {words.map((word, index) => (
                    <div key={index} className="flex items-center gap-1 pl-2 pb-2 h-[60px]">
                        <img src={word.imgPath} alt={word.text} className="sm:pb-2 w-7 sm:w-10 h-7 sm:h-10 bg-[#DFEDFA] rounded-full p-1" />
                        <span className="sm:pb-2">{word.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimationWords;