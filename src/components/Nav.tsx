import { Link } from "react-scroll";
import jsLogo from '../images/js-logo.png';

export const Nav = () => {

    const navItems = [
        "home",
        "about",
        "services",
        "faq",
        "projects",
    ]

    return (
        <header className="md:h-[15vh] xsm:h-[20vh] w-full bg-text fixed top-0">
            <nav className="h-full xsm:w-full md:w-[70%] ms-auto me-auto flex flex-row justify-between">
                <div className="xsm:w-1/2 md:w-2/5">
                    <Link 
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={200}
                        delay={50}
                        offset={-100}
                        className="flex items-center w-full h-full no-underline cursor-pointer xsm:justify-evenly md:justify-center md:flex-row xsm:flex-col"

                    >
                        <img src={jsLogo} alt="Shelton construction logo" className="md:max-w-full md:max-h-full xsm:max-h-[80%]" />
                        <h3 className="text-white xl:ms-10">Shelton Construction</h3>
                    </Link>
                </div>
                <div className="flex items-center md:flex-row xsm:flex-col justify-evenly xsm:w-1/2 md:w-2/5">
                    {navItems.map((item) => (

                        <Link 
                            to={item}
                            spy={true}
                            smooth={true}
                            duration={200}
                            delay={50}
                            offset={-20}
                            className="text-white no-underline transition-all ease-out delay-75 cursor-pointer xsm:text-small md:text-body hover:underline"
                        >
                            {item[0].toUpperCase() + item.slice(1)}
                        </Link>  
                    ))}
                    <Link 
                        to="footer"
                        spy={true}
                        smooth={true}
                        duration={200}
                        delay={50}
                        className="md:w-1/4 md:h-1/2 xsm:h-1/5 xsm:w-1/2 "
                    >
                        <button className="w-full h-full rounded-md btn-md bg-secondary text-light">Book Now</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}