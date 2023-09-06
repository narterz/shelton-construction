import { useMediaQuery } from "react-responsive";

interface ServiceProps {
    title: String;
    icon: any;
    services: string[];
}

export const ServiceCards: React.FC<ServiceProps> = ({ title, icon, services }) => {

    return (
        <div className="w-[90%] h-full flex flex-col justify-between ">
            <div className="mt-4">
                {icon}
            </div>
            <div>
                <h3 className="text-subheading">{title}</h3>
            </div>
            <ul className="flex flex-col list-disc h-1/2 ps-10 justify-evenly">
                {services.map((service) => (
                    <li className="font-normal text-text">{service}</li>
                ))}
            </ul>
            <a href="#" className="mb-2">Get a Quote</a>
        </div>
    )
}