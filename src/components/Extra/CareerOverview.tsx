// import ImageTag from "../Extra/ImageTag";
// import { workContent } from "../../assets/helper";

// const CareerOverview: React.FC = () => {
//   const boxes = Object.values(workContent);

//   return (
//     <div className="container mx-auto px-4 sm:px-8 flex flex-col space-y-10">
//       {boxes.map((box, index) => (
//         <div
//           key={index}
//           className="flex flex-col sm:flex-row bg-[#141416] rounded-xl p-6"
//         >
//           {/* Left Section */}
//           <div className="w-full sm:w-1/2 flex flex-col gap-3 pr-0 sm:pr-6 sm:border-r sm:border-[#2a2a2a]">
//             <div className="flex my-4">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <ImageTag
//                   key={i}
//                   src={box.left.starPath}
//                   alt="star"
//                   width="22"
//                   height="20"
//                 />
//               ))}
//             </div>
//             <p className="text-lg text-[#daecff]">{box.left.text}</p>
//             <ImageTag
//               src={box.left.imagePath}
//               alt="company logo"
//               className="pl-2 mt-4"
//             />
//           </div>

//           {/* Right Section */}
//           <div className="w-full sm:w-1/2 flex flex-col gap-3 pt-6 sm:pt-0 sm:pl-6">
//             <h1 className="font-semibold text-2xl sm:text-3xl text-white">
//               {box.right.header}
//             </h1>
//             <div className="flex gap-2 items-center">
//               <ImageTag
//                 src="/images/sections/workExperience/calendar.png"
//                 alt="calendar"
//                 height="19"
//                 width="19"
//               />
//               <p className="font-light text-[#daecff] text-sm">{box.right.date}</p>
//             </div>
//             <p className="font-light text-[#daecff] text-sm italic mt-4">Responsibilities</p>
//             <ul className="list-disc pl-6 flex flex-col gap-2 text-[#daecff]">
//               {box.right.list.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CareerOverview;

import ImageTag from "../Extra/ImageTag";
import { workContent } from "../../assets/helper";

const CareerOverview: React.FC = () => {
  const boxes = Object.values(workContent);

  return (
    <div className="container mx-auto px-4 sm:px-8 flex flex-col space-y-10">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row rounded-xl p-6 gap-6 sm:gap-10 border-1 border-blue-100">
            
          {/* Left Section */}
          <div className="w-full sm:w-1/2 bg-[#141416] flex flex-col gap-3 pr-0 sm:pr-8 sm:border-r sm:border-red-100 border-1 border-red-100 sm:p-10">
            <div className="flex my-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <ImageTag
                  key={i}
                  src={box.left.starPath}
                  alt="star"
                  width="22"
                  height="20"
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
          <div className="w-full bg-[#141416] sm:w-1/2 flex flex-col gap-3 pt-6 sm:pt-0 sm:pl-8">
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