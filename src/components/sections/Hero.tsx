import AnimationWords from "../Extra/AnimationWords";
import Button from "../Extra/Button";
import HeroExperience from "../HeroModels/HeroExperience";
import MotionH1 from '../Extra/MotionH1';

function Hero() {
    return (
        <div className="vw-100"> 
            <section id="Hero" className="relative overflow-hidden w-30%">
                <div className="absolute top-0 left-0 z-10 w-[50%]">
                    <img src="/images/bg.png" alt="background" />
                </div>
                {/* Left : Hero Content */}
                <header className="flex flex-col justify-center w-screen ml-5 sm:ml-10 sm:mx-10">
                    <div className="flex flex-col hero-text text-2xl sm:text-5xl font-semibold text-start mt-20 sm:mt-65 w-fit">
                        <div className='flex items-center'>
                            <MotionH1>Shapping</MotionH1>
                            <MotionH1><AnimationWords /></MotionH1>
                        </div>
                        <MotionH1 delay={0.3}><p className="text-[#DFEDFA]">into Real Projects</p></MotionH1>
                        <MotionH1 delay={0.6}>that Deliver Results</MotionH1>
                        <p className="text-white-50 text-sm sm:text-lg mt-5 mx-2 font-normal z-50">
                            Hi, I'm <b>Parveen</b>, a developer based in India with a passion for code.
                        </p>
                        <Button className="pl-2 sm:pl-0"/>
                    </div>
                </header>
            </section>

            {/* Right : 3D Model */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
    );
}

export default Hero;
