import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import ContactForm from "../component/ContactForm";
import ServiceNeed from "../component/ServiceNeed";

const ContactPage = () => {
    return ( 
        <div className="container">
            <article className="contact-info">
                <p><FaFacebook /><span className="extra contact">ButlerExpress</span></p>
                <p><FaEnvelope /><span className="extra contact">ButlerExpress@cop.cn</span></p>
                <p><FaPhone /><span className="extra contact">018-339-8920</span></p>
            </article>
            <ServiceNeed />
            <ContactForm />
        </div>
     );
}
 
export default ContactPage;