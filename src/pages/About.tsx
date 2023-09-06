import sheltonHome from '../images/shelton-home.jpeg';
import { InViewAnimation } from '../utilities/InViewAnimations';
import { useRef } from 'react';

export const About = () => {

    const aboutRef = useRef<HTMLDivElement>(null)

    return (
        <div className="md:h-[100vh] xsm:h-[120vh] bg-white flex justify-center items-center" id="about">
            <InViewAnimation directionX={true} ref={aboutRef} className='xsm:w-[70%] xsm:h-full md:w-[65%] md:h-5/6 flex xsm:flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-between xsm:w-full xsm:h-[50%] xsm:mt-[8vh] md:w-1/2 md:h-full'>
                    <h1>About</h1>
                    <p className='xsm:w-full md:w-[90%] tracking-wide text-justify'>
                        With a rich and diverse background in the realm of construction, James Shelton III stands as an experienced and reliable contractor. With a career spanning over two decades, his expertise shines through in every project he undertakes. Specializing in transformative room remodels, he has the uncanny ability to envision spaces beyond their current limitations, breathing new life into homes and businesses alike. James’s meticulous attention to detail, coupled with a keen eye for design, ensures that each remodel is a harmonious blend of functionality and aesthetics.
                    </p>
                    <p className='tracking-wide text-justify xsm:w-full md:w-[90%]]'>
                        James’s skill set extends beyond interior transformations, as he is equally adept at outdoor maintenance and construction tasks. His proficiency in clearing gutters showcases his commitment to preserving and enhancing the longevity of properties. Seasoned in handling various materials and equipped with cutting-edge techniques, he guarantees optimal gutter performance and protection against potential water damage. Moreover, James is not confined by existing structures – he possesses the proficiency to build properties from the ground up. His comprehensive knowledge of construction processes, combined with a dedication to quality craftsmanship, results in properties that stand as testaments to both his skill and the aspirations of his clients.
                    </p>
                    <a href="#">Learn More</a>
                </div>
                <div className=' xsm:w-full xsm:h-[40%] md:w-1/2  flex justify-center md:h-[80vh]'>
                    <img src={sheltonHome} alt="James on a bulldozer" className='object-cover xsm:w-[70%] md:w-[90%] h-full' id='about-img' />
                </div>
            </InViewAnimation>
        </div>
    )
}