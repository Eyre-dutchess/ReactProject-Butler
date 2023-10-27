import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";
import Alert from "./Alert";

const LSContact = ()=>{
    let info = localStorage.getItem("info")
    if(info){
        return (info = JSON.parse(localStorage.getItem("info")))
    }else{
        return []
    }
}
const ContactForm = () => {
    const {alert, showAlert} = useGlobalContext();
    const [info, setInfo] = useState({name:"", email: "", phone:""});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !phone){
            showAlert(true, "danger", "Invalid input, try again!")
        }else{
            setInfo({name: name, email: email, phone: phone});
            showAlert(true, "success", "We've received your information! we will contact you shortly after!")
        }   
    }
    useEffect(()=>{
        localStorage.setItem("info", JSON.stringify(info))
    },[info])
    return ( 
        <section className="contact-section">
            {alert.show && <Alert {...alert} removeAlert = {showAlert}/>}
            <h2 className="contact-title">Your information</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="name">
                    <label htmlFor="name">Name: </label>
                    <input 
                    value={name}
                    onChange = {(e)=> setName(e.target.value)}
                    id="name" type="text" />
                </div>
                <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input 
                    value={email}
                    onChange = {(e)=> setEmail(e.target.value)}
                    id="email" type="text" />
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone: </label>
                    <input
                    value={phone}
                    onChange = {(e)=> setPhone(e.target.value)}
                    id="phone" type="text" />
                </div>
                <button className="submit-btn btn">Submit</button>
            </form>

        </section>
     );
}
 
export default ContactForm;