import { useEffect } from "react";

const Alert = ({ type, msg,list,removeAlert}) => {

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert()
        }, 3000)
    },[list])
    return ( 
        <section className={`alert-section ${type === "success" ? "success" :"danger"}`}>
            <p>{msg}</p>
        </section>
     );
}
 
export default Alert;