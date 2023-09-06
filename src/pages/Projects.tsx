import houseProject from '../images/house-project.jpeg';
import kitchenProject from '../images/kitchen-remodel.jpeg';
import roomProject from '../images/room-remodel.jpeg';
import walkway from '../images/thing.jpeg';
import bathroomProject from '../images/tub-remodel.jpeg';
import { DelayedInViewAnimation } from '../utilities/DelayedInViewAnimations';
import { useRef } from 'react';

export const Projects = () => {

    const images = [
        {src: houseProject, alt: "House built from the ground up in Charlotte, NC", title: "House built from the ground up for client in Charlotte, NC"},
        {src: kitchenProject, alt: "Full kitchen counter remodel Charlotte, NC", title: "Full kitchen remodel for client in Charlotte, NC"},
        {src: roomProject, alt: "Full room remodel", title: "Room Remodle for client in Charlotte, NC"},
        {src: walkway, alt: "walkway", title: "Walkway created for establishment in Charlotte, NC"},
        {src: bathroomProject, alt: "Bathrrom tile and tub remodel", title: "Full bathroom remodel for client in Charlotte, NC"},
    ]

    const projectRefs = useRef<HTMLDivElement>(null);

    return (
        <div className="xsm:h-[60vh] border md:h-[120vh] flex flex-col justify-between items-center mt-10  bg-primary" id="projects">
            <div className="w-[65%] xsm:h-[15%] md:h-[20%] md:mt-10">
                <h1>Projects</h1>
                <p className='xsm:w-full md:w-2/3'>The following are a collection of completed projects throughout the Charlotte, NC area. All projects were completed by James Shelton.</p>
            </div>
            <div className="mt-10 grid items-center grid-cols-4 xsm:gap-4 md:gap-8 grid-rows-4 xsm:w-[70%] md:w-[65%]">
                {images.map((img, i) => (
                    i === 0
                    ?   (  
                            <DelayedInViewAnimation 
                                className='col-span-2 row-span-2'
                                directionX={false}
                                ref={projectRefs}
                                index={i}
                            >
                                <img src={img.src} alt={img.alt} className='object-cover w-full' title={img.title}/>
                            </DelayedInViewAnimation>
                        )
                    :   (
                            <DelayedInViewAnimation 
                                className='col-span-1 row-span-1'
                                directionX={true}
                                ref={projectRefs}
                                index={i}
                            >
                                <img src={img.src} alt={img.alt} title={img.title}/>
                            </DelayedInViewAnimation>
                        )
                ))}
            </div>
        </div>
    )
}