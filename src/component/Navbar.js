
import logo from "../image/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { links } from "../navData";

const Navbar = () => {
    const {sidebarOpen , toggleSidebar,  openSubmenu, closeSubmenu} = useGlobalContext();
    function displaySubmenu(e){
       const newName = e.target.textContent;
       const tempBtn = e.target.getBoundingClientRect();
       const tempCenter = (tempBtn.left + tempBtn.right)/2;
       const tempBot = tempBtn.bottom - 12;
       openSubmenu(newName, {tempCenter, tempBot} )
    }
    function handleMouse(e){
        if(!e.target.classList.contains("mouseHover")){
            closeSubmenu()
        }
    }
    function setActive(e){
        const curItem = e.target.parentElement;
        const curList = curItem.parentElement;
        const allCurItems = Array.from(curList.children)
        
        if(curItem.classList.contains("active"))return;
        else{
            allCurItems.forEach((item)=>{
                item.classList.remove("active")
            })
            curItem.classList.add("active")
        }
    }
    return ( 
        <section className="navbar-section" onMouseOver={handleMouse}>
            <img src={logo} alt="logo-img" className="logo-img" />
            <button
            onClick={()=> toggleSidebar()}
            className="toggle-btn">
                {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="nav-list-container">
            <ul className="nav-list">
                {links.map((link, index)=>{
                    return (
                        <li 
                            className="nav-item" key={index}>
                            <span className="mouseHover" 
                            onClick={setActive}
                            onMouseOver={displaySubmenu}>{link.page}</span>
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
            </div>
            
            
        </section>
     );
}
 
export default Navbar;