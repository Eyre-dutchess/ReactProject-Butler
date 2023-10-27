import { useState } from "react";
import data from "../faqData";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
    const [faqs, setFaqs]= useState(data)
    return ( 
        <section className="faq-section">
            <h2 className="faq-title">Ask us</h2>
            <ul className="faq-container">
                {faqs.map((faq)=>{
                    return <SingleQuestion key={faq.id} {...faq}/>
                })}
            </ul>
        </section>
     );
}
 
export default FAQ;