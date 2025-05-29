import WorkExperience from '../sections/WorkExperience';
import ImageTag from './ImageTag'; // Adjust this import based on your setup

const CareerOverview = () => {
    return (
        <div>
            <div className="sm:flex mx-0 sm:mx-8 container">
                {/* Left Section */}
                {Object.values(WorkExperience).map((daa, index) => (
                    <div key={index} className="w-full sm:w-[60%]">
                        <div className="mt-8 sm:mt-16 mb-4 flex flex-col gap-2.5 bg-[#141416] rounded-xl mx-4">
                            <div className="flex my-6 mx-7">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <ImageTag
                                        key={starIndex}
                                        src={daa.left.starPath}
                                        alt="star"
                                        width="22"
                                        height="20"
                                    />
                                ))}
                            </div>
                            <p className="mx-7 w-[90%] text-lg">{daa.left.text}</p>
                            <ImageTag
                                src={daa.left.imagePath}
                                alt="company logo"
                                className="pl-6 mb-4 mt-4"
                            />
                        </div>
                    </div>
                ))}


                {/* Right Section */}
                {/* <div className="flex sm:flex-none flex-col gap-7 sm:gap-13 w-90vw">
          {experienceArray.map((exp, index) => (
            <div
              key={index}
              className={`pl-5 sm:pl-6 px-5 mx-5 sm:w-65% h-fit py-5 rounded-xl bg-[#141416] ${
                index === 0 ? 'sm:mt-16' : 'sm:mt-4'
              } sm:h-70`}
            >
              <div className="flex flex-col gap-2 sm:my-2">
                <h1 className="font-semibold text-2xl sm:text-3xl">
                  {exp.right.header}
                </h1>
                <div className="flex gap-2 items-center">
                  <ImageTag
                    src="/images/sections/workExperience/calendar.png"
                    alt="calendar"
                    height="19"
                    width="19"
                  />
                  <p className="font-light text-[#daecff] text-sm">
                    {exp.right.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4 sm:mt-0 w-90vw">
                <p className="font-light text-[#daecff] text-sm italic">
                  Responsibilities
                </p>
                <ul className="list-disc pl-8 flex flex-col gap-3">
                  {exp.right.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div> */}

            </div>
        </div>
    );
};

export default CareerOverview;
