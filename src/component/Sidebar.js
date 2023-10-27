import { useEffect } from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";
import {links} from "../navData";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const {sidebarOpen} = useGlobalContext();
    const sidebarContainer = useRef(null);
    const sidebarList = useRef(null);
    useEffect(()=>{
        const tempHeight = sidebarList.current.getBoundingClientRect().height;
        if(sidebarOpen){
            sidebarContainer.current.style.height = `calc(${tempHeight}px + 2em)`;
            sidebarContainer.current.style.padding = "1em";
        }else{
            sidebarContainer.current.style.height = "0px";
            sidebarContainer.current.style.padding = "0em";
        }
    }, [sidebarOpen])
    return ( 
        <section className="sidebar-section" ref={sidebarContainer}>
            <ul className="sidelist-container" ref={sidebarList}>
            
           {links.map((link, index)=>{
            return (
                <li 
                className="nav-item" key={index}>
                    {link.page}
                   <ul className="sublink-container">
                        {link.sublinks.map((sublink, index)=>{
                            const {label, url, icon} = sublink;
                            return (
                                <li className="sublink-item" key={index}>
                                    <Link to={url}>
                                        {icon}
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                   </ul>
                </li>
            )
        })}     
        
            </ul>
        </section>
     );
}
 
export default Sidebar;