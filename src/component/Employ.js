import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import {links} from "../navData";

const Employ = () => {
    const serviceLinks = links.filter((item)=> item.page === "service");
    const serviceTypes = serviceLinks[0].sublinks;
    const [value, setValue] = useState(0);

    const {person, age, getPerson} = useGlobalContext();
    const {id, name, image, info } = person;
    const [showMore, setShowMore] = useState(false);
    return ( 
        <section className="employ-section">
            <h2 className="employ-title">Star Employee</h2>
            <div className="tab-container">
                {serviceTypes.map((item, index)=>{
                    return (
                        <button 
                        onClick={()=> {setValue(index);
                             getPerson()}}
                        key={index} className={`tab-btn ${index === value ? "active":""}`}>
                            {item.label}
                        </button>
                    )
                })}
            </div>
            <article className="star-container">
                <img src={image} alt="her-img" className="her-img" />
                <div className="her-info">
                    <h6 className="name"><span className="extra">Name:</span>{name}</h6>
                    <p className="age"><span className="extra">Age :</span>{age}</p>
                    <p className="her-review info">
                        <span className="extra">Her Reviews: </span>
                        {showMore ? info : "She is ...  "} 
                        <button 
                            onClick={()=> setShowMore(!showMore)}
                            className="show-more-btn">
                            {showMore ? "show less" :"read more"}
                        </button>
                    </p>
                    <Link to={`/single/${id}`} className="detail-link"><span>Details </span><FaArrowAltCircleRight className="detail-icon"/></Link>
                </div>
            </article>
        </section>
     );
}
 
export default Employ;