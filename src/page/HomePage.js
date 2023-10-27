import Hero from "../component/Hero";
import Employee from "../component/Employ";
import Review from "../component/Review";
import Faq from "../component/Faq";


const HomePage = () => {
    return ( 
        <div className="homepage container">
            <Hero />
            <Employee />
            <Review />
            <Faq />
        </div>
        
        
     );
}
 
export default HomePage;