import HeroImg from '../images/Hero-img.jpg';
import { InViewAnimation } from '../utilities/InViewAnimations';
import { useRef } from 'react';

export const Home = () => {

    const HomeRef = useRef<HTMLDivElement>(null)

    return (
        <div className="flex xsm:flex-col md:flex-row justify-center xsm:h-[80vh] xsm:mt-[20vh] md:mt-[15vh] md:h-[85vh] bg-primary" id="home">
            <div className='lg:w-1/2 lg:h-full xsm:w-full xsm:h-2/3'>
                <img src={HeroImg} alt="House under construction" className='w-full h-full' />
            </div>
            <div className='flex items-center xsm:justify-center md:justify-end border xsm:h-1/2 lg:w-1/2 lg:h-[90%]'>
                <InViewAnimation 
                    directionX={false} 
                    className='flex flex-col xsm:justify-evenly md:justify-between xsm:h-full xsm:w-[70%] lg:h-2/5 lg:w-[95%]'
                    ref={HomeRef}    
                >
                    <h1 className='font-bold'>Bring Your Dream Property to Life</h1>
                    <small className='w-[85%]'>From Concept to Creation: With James Shelton III, you gain a dependable expert who can remodel existing houses to perfection or craft new properties from the ground up. Count on unwavering reliability as he turns your vision into reality</small>
                    <button className='lg:w-1/5 h-1/5 xsm:w-1/3 xsm:h-1/6'>Learn More</button>
                </InViewAnimation>
            </div>
        </div>
    )
}