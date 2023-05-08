import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import '../bear.css'
import {useEffect, useState} from "react";
import {ComputersCanvas} from "./canvas/index.js";
const Hero = () => {

    const [isMobile, setIsMobile] = useState(false);



    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <section className={`relative w-full h-screen mx-auto flex justify-between flex-col`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Xinhan</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am front end developer who develops websites, user <br className='sm:block hidden' />
                        interfaces and web applications

                    {/*    have multiple experience with  programming in projects with technical complexity.
                        Experience being collaborative in order to complete large projects.
                        I am a person with first mindset and self motivate and self-discipline and always have intellectual curiosity.
*/}
                    </p>
                </div>
            </div>

            {/*<div className={`relative  id="bear-id`}>*/}
            {/*    <div className="bear">*/}
            {/*        <div className="bear__ears">*/}
            {/*            <div className="bear__ears__left ear"></div>*/}
            {/*            <div className="bear__ears__right ear"></div>*/}
            {/*        </div>*/}
            {/*        <div className="bear__body">*/}
            {/*            <div className="bear__eyes">*/}
            {/*                <div className="bear__eyes--left eye"></div>*/}
            {/*                <div className="bear__eyes--right eye"></div>*/}
            {/*            </div>*/}
            {/*            <div className="bear__nose">*/}
            {/*                <div className="bear__nose--inner"></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="shadow"></div>*/}
            {/*</div>*/}

            <ComputersCanvas/>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
