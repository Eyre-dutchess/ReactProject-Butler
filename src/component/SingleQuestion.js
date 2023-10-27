import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SingleQuestion = ({title, info}) => {
    const [show, setShow] = useState(false)
    return ( 
        <article className={`faq-item ${show ?"active" :""}`}>
            <div className="faq-top">
                <h6 className="question">{title}</h6>
                <button 
                onClick={()=> setShow(!show)}
                className="faq-btn">
                    {show ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>
            {show && <p className="info faq-info">{info}</p>}
        </article>
     );
}
 
export default SingleQuestion;