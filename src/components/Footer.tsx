

export const Footer = () => {
    return (
        <footer className="xsm:h-[60vh] md:h-[65vh] absolute -bottom-[20vh] xsm:justify-between w-full flex flex-col items-center bg-text" id="footer">
            <div className="flex flex-col items-center xsm:text-center xsm:mt-5 md:mt-2 md:h-[20%] xsm:w-[70%] md:w-[65%]">
                <h1 className="text-white">Contact</h1>
                <p className="font-thin text-white md:w-2/3">For all inquires please complete all required fields. Include the location, date, and a detailed explanation of the service needed. We will keep in touch.</p>
            </div>
            <div className="xsm:w-[70%] md:w-[65%] xsm:items-center md:mt-5 sm:h-[77%] md:h-[70%] flex xsm:flex-col md:flex-row">
                <div className="flex flex-col justify-between xsm:items-center md:items-start xsm:h-2/5 md:h-4/5 xsm:w-1/2 md:w-1/2">
                    <h1 className="text-white md:text-start xsm:w-full xsm:text-center md:w-1/2">Get in touch</h1>
                    <div className="flex flex-col items-start w-full xsm:text-center md:text-start justify-evenly md:h-1/5">
                        <p className="text-white xsm:w-full md:w-1/2">3625 yancyvile st</p>
                        <p className="text-white xsm:w-full md:w-1/2">Greensburo, NC 27405</p>
                    </div>
                    <div className="flex flex-col items-start w-full xsm:mb-2 md:mb-0 xsm:text-center md:text-start justify-evenly md:h-1/5">
                        <a href="mailto:jamesshelton506@gmail.com" className="xsm:w-full md:w-1/2">jamesshelton506@gmail.com</a>
                        <p className="text-white xsm:w-full md:w-1/2">1+ (704) 977-4589</p>
                    </div>
                </div>
                <div className="xsm:h-3/5 md:h-full xsm:w-full md:w-1/2">
                    <form action="" className="flex flex-col justify-between w-full h-full xsm:items-center md:items-end">
                        <input type="text"  placeholder="Full name"/>
                        <input type="text"  placeholder="Email"/>
                        <input type="text"  placeholder="Service needed"/>
                        <textarea name="message" className="w-4/5 h-[25%]" placeholder="Message"></textarea>
                        <div className="md:w-4/5 md:h-[12%] xsm:h-[15%] xsm:w-2/5 flex items-center mb-3">
                            <button type="submit" className="self-start xsm:w-full xsm:h-full md:w-1/3 md:h-4/5 bg-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}