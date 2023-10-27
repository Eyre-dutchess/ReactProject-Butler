
import { useGlobalContext } from "../context";
import heroImg from "../image/hero-img.avif"
import {links} from "../navData"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
    const {closeSubmenu} = useGlobalContext();
    const serviceLinks = links.filter((item)=> item.page === "service")
    const {sublinks} = serviceLinks[0];
    const [clasNM, setClasNM] = useState("");
    const [value, setValue] = useState(0);

    function checkNum(ite){
        if(ite < 0) return 2;
        else if(ite > 2) return 0;
        else return ite;
    }
    useEffect(()=>{
        const time = setInterval(()=>{

            setValue(checkNum(value + 1))
        }, 2000)
        return () => clearInterval(time)
    }, [value])
    return (
        <section className="hero-section" onMouseOver={closeSubmenu}>
            <img src={heroImg} alt="hero-img" className="hero-img" />
            <h6 className="hero-content">We are committed to  <span>prompt</span>, <span>professional</span> and <span>quality</span> services at all times.</h6>
            <div className="btn-container">
                {sublinks.map((item, index)=>{
                    return (
                        <Link to="/service"
                        key={index}
                        className={`service-btn ${index=== value ? "active" :""}`}>
                            {item.label}
                        </Link>
                    )
                })}
            </div>
        </section>
     );
}
 
export default Hero;