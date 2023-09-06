import { useMediaQuery } from "react-responsive";
import { ServiceCards } from "../components/ServiceCards";
import { AiFillHome } from 'react-icons/ai';
import { BsFillSunFill, BsHammer } from 'react-icons/bs';
import { useRef } from "react";
import { DelayedInViewAnimation } from "../utilities/DelayedInViewAnimations";

export const Services = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: "768px" });

    const iconSize = (): number => {
        return isSmallScreen ? 30 : 40
    }

    const serviceContent = [
        {
            icon: <AiFillHome size={iconSize()} className="text-text" />,
            title: "Indoor Remodeling",
            services: [
                "Kitchen",
                "Bathrooms",
                "Basements",
                "Living Rooms",
                "Attics",
                "Window and doors",
                "Whole-House Remodel"
            ]
        },

        {
            icon: <BsFillSunFill size={iconSize()} className="text-text" />,
            title: "Outdoor Remodeling",
            services: [
                "Deck and patio",
                "Fence and gate",
                "Driveway paving",
                "Outdoor tiles",
                "Gutter cleaning and installation",
                "Land clearing",
                "Landscape",
            ]
        },

        {
            icon: <BsHammer size={iconSize()} className="text-text" />,
            title: "Build From Ground Up",
            services: [
                "Family home",
                "Shed and garage",
                "Swimming Pools",
                "Commercial Shops",
                "Additional Rooms",
            ]
        }
    ]

    const serviceCardRef = useRef<HTMLDivElement>(null);

    return (
        <div className="md:h-[100vh] xsm:h-[150vh] bg-white flex flex-col items-center justify-evenly" id="services">
            <div className="text-center xsm:h-[10%] md:h-[10%] flex flex-col justify-evenly items-center xsm:w-[70%] md:w-[65%]">
                <h1>Services</h1>
                <p className="xsm:w-full md:w-1/2">We Offer remodeling to any indoor or outdoor property or general maintenance. All pricing is finalized among inspection.</p>
            </div>
            <div className="flex xsm:flex-col xsm:items-center md:flex-row xsm:w-[70%] md:w-[65%] xsm:h-[80%] md:h-[80%] justify-between">
                {serviceContent.map((card, index) => (
                    <DelayedInViewAnimation 
                        index={index} 
                        directionX={false} 
                        ref={serviceCardRef}
                        className="flex flex-col items-center justify-between xsm:w-[70%] xsm:h-[32%] md:h-[70%] md:w-[30%] bg-primary"
                    >
                        <ServiceCards
                            title={card.title}
                            icon={card.icon}
                            services={card.services}
                        />
                    </DelayedInViewAnimation>
                ))}
            </div>
        </div>
    )

}