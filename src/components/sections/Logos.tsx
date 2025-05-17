import { logoIconsList } from "../../assets/helper";

const Logos = () => {
    return (
        <div className="overflow-hidden w-full py-15">
            <div className="flex marquee whitespace-nowrap">
                {[...logoIconsList, ...logoIconsList].map((logo, index) => (
                    <div key={index} className="flex-none px-6 sm:px-10">
                        <img src={logo.imgPath} alt={`Logo ${index + 1}`} className="h-8 sm:h-12 w-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logos;
