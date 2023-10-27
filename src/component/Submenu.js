import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";


const Submenu = () => {
    const {submenuOpen, title: {name, sublinks}, location, setSubmenuOpen} = useGlobalContext();

    const container = useRef(null);
    useEffect(()=>{
        const curSubmenu = container.current;
        const {tempCenter, tempBot} = location
        curSubmenu.style.left = `${tempCenter}px`
        curSubmenu.style.top = `${tempBot}px`
    }, [name, location, sublinks])

    return ( 
        <section
        onMouseOver={()=> setSubmenuOpen(true)}
        className={`submenu-container  ${submenuOpen? "show" :""}`}
        ref={container}
        >
            {sublinks.map((item, index)=>{
                const { url, icon, label } = item;
                return(
                    <li  key={index} className="submenu-link-item">
                    <a href={url}>
                        {icon}
                        {label}
                    </a></li>
                )
            })}
            
        </section>
     );
}
 
export default Submenu;