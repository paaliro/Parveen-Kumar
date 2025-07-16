import CareerOverview from "../Extra/CareerOverview";
import CustomerFeedback from "../Extra/CustomerFeedback";
import Tag from "../Extra/Tag";
// import WhatIBring from "../Extra/WhatIBring";

const WorkExperience = () => {
    return ( 
        <section className="bg-[#202123] rounded-xl mt-10 pt-3 mx-2 sm:mx-9">
            <Tag icon="💼" text="My Career Overview" />  
            <p className="text-center text-2xl sm:text-4xl font-semibold mt-2 sm:mt-7 mb-10">Professional Work Experience</p>
            <CareerOverview />
            {/* <WhatIBring />   */}
            <CustomerFeedback />
        </section>
    )
} 

export default WorkExperience;