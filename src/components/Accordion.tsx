import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FC, useState } from 'react';

interface AccordionProps {
    question: string;
    answer: string;
    border: boolean
}

export const Accordion:FC<AccordionProps> = ({question, answer, border}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={`${border ? "border-b" : "border-0"} h-[11%] flex flex-col justify-evenly`}>
            <div className='flex flex-row items-center'>
                <div className='w-[10%]'>
                    { isOpen
                        ? <AiOutlineMinus size={30} className='cursor-pointer text-text' onClick={() => setIsOpen(!isOpen)}/>
                        : <AiOutlinePlus size={30} className='cursor-pointer text-text' onClick={() => setIsOpen(!isOpen)}/>
                    }
                </div>
                <div className='xsm:w-full md:w-[90%] text-start'>
                    <h3 className='text-text'>{question}</h3>
                </div>
            </div>
            <div className={`${isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"} w-[90%] ms-auto transition-all delay-75 ease-in-out`}>
                <small className='xsm:text-[0.7rem] md:text-small'>{answer}</small>
            </div>
        </div>
    )
}