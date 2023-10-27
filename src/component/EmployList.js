
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const EmployList = () => {
    const {people} = useGlobalContext();
    
    return ( 
        <section className="employlist-section">
            <ul className="people-list">
                {people.map((person)=>{
                    const {id, image, name, veter} = person;
                    return (
                        <li className="people-item" key={id}>
                            <article>
                                <img src={image} alt="people-img" className="people-img" />
                                <div className="people-infor">
                                    <h6 className="people-name">{name}</h6>
                                    <p className="people-veter info"><span className="extra">Experience: </span>{veter==="Alcoholic" ? "More than 5 years" :" 2-5 years"}</p>
                                    
                                </div>
                                <Link className="detail-link" to={`/single/${id}`}>
                                    <span>Details</span>
                                    <FaArrowAltCircleRight className="detail-icon"/>
                                </Link>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </section>
     );
}
 
export default EmployList;