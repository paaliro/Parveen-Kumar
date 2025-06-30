import ImageTag from "../Extra/ImageTag";
import { workContent } from "../../assets/helper";

const CareerOverview: React.FC = () => {
  const boxes = Object.values(workContent);

  return (
    <div className="container mx-auto px-4 sm:px-8 flex flex-col">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row rounded-xl gap-6 sm:gap-10">

          {/* Left Section */}
          <div className="w-full sm:w-1/2 bg-[#141416] flex flex-col gap-3 sm:gap-8 p-5 sm:p-0 sm:pt-8 sm:pl-8 rounded-lg">
            <div className="flex my-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <ImageTag
                  key={i}
                  src={box.left.starPath}
                  alt="star"
                  width="22"
                  height="22"
                />
              ))}
            </div>
            <p className="text-lg text-[#daecff]">{box.left.text}</p>
            <ImageTag
              src={box.left.imagePath}
              alt="company logo"
              className="pl-2 mt-4"
            />
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2 bg-[#141416] flex flex-col gap-3 pt-6 sm:pt-10 pl-6 sm:pl-12 p-5 sm:p-10 rounded-lg">
            <h1 className="font-semibold text-2xl sm:text-3xl text-white">
              {box.right.header}
            </h1>
            <div className="flex gap-2 items-center">
              <ImageTag
                src="/images/sections/workExperience/calendar.png"
                alt="calendar"
                height="19"
                width="19"
              />
              <p className="font-light text-[#daecff] text-sm">{box.right.date}</p>
            </div>
            <p className="font-light text-[#daecff] text-sm italic mt-4">Responsibilities</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#daecff]">
              {box.right.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>  
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerOverview;