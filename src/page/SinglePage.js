import { useEffect } from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    
const SinglePage = () => {
    const {id} = useParams();
    const {age} = useGlobalContext();
    const [loading, setLoading] = useState(true)
    const [single, setSingle] = useState({})
    useEffect(()=>{
        setLoading(true)
        const getSingleById = async() =>{
            try {
                const resp = await fetch(`${url}${id}`);
                const data = await resp.json();
                console.log(data.drinks[0])
                const result = data.drinks[0];
                if(result){
                    const {idDrink, strDrink,strAlcoholic, strDrinkThumb, strInstructions,
                        strIngredient1, strIngredient2, strIngredient3
                    } = result;
                    const singleDetail = {
                        id: idDrink, 
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strInstructions,
                        veter: strAlcoholic,
                        skill: [strIngredient1, strIngredient2, strIngredient3]
                    }
                    setSingle(singleDetail)
                }
                else{
                    setSingle(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getSingleById()
    },[id])

    if(loading){
        return (
            <div className="container">
                <h1>Loading ...</h1>
            </div>
        )
    }
    else {
        const { name, image, info, veter, skill} = single;
    
    return ( 
        <div className="single-page container">
            <section className="single-section">
                <img src={image} alt="her-img" className="her-img" />
                <div className="her-info">
                    <h6 className="name"><span className="extra">Name:</span>{name}</h6>
                    <p className="age"><span className="extra">Age :</span>{age} years old</p>
                    <p className="veter">
                        <span className="extra">Service :</span>
                        {veter === "alcoholic" ? "over 5 years" : "less than 5 years"}</p>
                    <p className="skills">
                        <span className="extra">Specialty:</span>
                        <br/>
                        {[...skill].join(" , ")}</p>
                    <p className="her-review info">
                        <span className="extra">Her Reviews: </span>
                        {info}
                    </p>
                </div>
            </section>
            <Link className="detail-link" to="/">
                <FaArrowAltCircleLeft className="detail-icon"/>
                <span>Back Home</span>
            </Link>
        </div>
     )};
}
 
export default SinglePage;