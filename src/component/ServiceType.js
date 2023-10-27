import { useGlobalContext } from "../context";


const ServiceType = () => {
    const {cato, setNewList} = useGlobalContext()
    return ( 
        <section className="service-type-section">
            <h6>Service types: </h6>
            <div className="cato-btn-container">
                {cato.map((category, index)=>{
                    return (
                        <button onClick={()=> setNewList(category)} key={index}>{category}</button>
                    )
                })}
            </div>
        </section>
     );
}
 
export default ServiceType;