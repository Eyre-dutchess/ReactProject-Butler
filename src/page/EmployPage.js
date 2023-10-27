import ServiceType from "../component/ServiceType";
import EmployList from "../component/EmployList";

const EmployPage = () => {
    return ( 
        <div className="employ-page container">
            <h2>Star Employee</h2>
            <ServiceType />
            <EmployList />
        </div>
     );
}
 
export default EmployPage;