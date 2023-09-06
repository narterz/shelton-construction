import { Accordion } from "../components/Accordion";
import { useRef } from "react";
import { InViewAnimation } from "../utilities/InViewAnimations";

export const Faq = () => {

    const QA = [
        {
            question: "Where do you operate out of?",
            answer: "We operate out of the Guilford, mecklenburg, durham, and Alamance county in North Carolina."
        },
        {
            question: "How do you determine the price for a project.",
            answer: "The price of a project is determined upon an inspection of the property. Prices may vary based on the square footage, location, materials, or estimated duration of completion."
        },
        {
            question: "How far are you willing to travel?",
            answer: "We are willing to travel just over 100 miles for a project whether the location is in or out of state."
        },
        {
            question: "Do we have to provide the materials for a the contract?",
            answer: "Yes all materials needed for a service need to be bought by the client. Upon an inspection we will determine what material needs to be bought. It is best to have materials ready before construction begins."
        },
        {
            question: "What if I am unsatisfied with the work? do you offer refunds?",
            answer: "All constructive criticism is appreciated. If you have an issue with the work done we can worker harder to rectify mistakes. Be advised that there are no refunds."
        },
        {
            question: "How many hours are you willing to work in a day?",
            answer: "We are willing to work 8-12 hours a day on any given project. Out hours span from 6am - 10pm. You can always specify what times works best for you. "
        },
        {
            question: "What is the estimated time for a project",
            answer: "The estimated time for a project is determined upon inspection. The duration of construction can be influenced by materials used, square footage, and location."
        },
        {
            question: "What is your experience? Do you have an credentials?",
            answer: "James has over 35 years of experience in construction contracting, with certifications in [certifications] and a an associates from Norwalk Community college."
        }
    ]

    const faqRef = useRef<HTMLDivElement>(null);

    return (
        <div className="xsm:h-[100vh] md:h-[100vh] bg-white flex flex-col items-center justify-evenly" id="faq">
            <div className="w-[65%] h-[10%] flex flex-col items-center justify-evenly">
                <h1 className="xsm:text-center">Frequently Asked Questions</h1>
            </div>
            <InViewAnimation 
                directionX={true}
                ref={faqRef}
                className="w-[65%] h-[80%] flex flex-col justify-evenly"
            >
                {QA.map((item, i) => (
                    i === 7 
                        ? <Accordion question={item.question} answer={item.answer} border={false} />
                        : <Accordion question={item.question} answer={item.answer} border={true}/>
                ))}
            </InViewAnimation>
        </div>
    )
}