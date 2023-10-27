import { useEffect } from "react";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteLeft} from "react-icons/fa";
import data from "../reviewData";

const Review = () => {
    const [reviews, setReviews] = useState(data);
    const [index, setIndex] = useState(1);
    
    useEffect(()=>{
        if(index < 1){
            setIndex(reviews.length)
        }
        if(index > reviews.length ){
            setIndex(1)
        }
    }, [index, reviews])
    function getRandom(){
        const randomIndex = Math.floor(Math.random()*(reviews.length - 1) + 1);
        if(randomIndex === index){
            setIndex(randomIndex + 1)
        }else{
            setIndex(randomIndex)
        }
    }

    useEffect(()=>{
        const slider = setInterval(()=>{
            setIndex(index + 1)
        }, 3000)
        return ()=> clearInterval(slider)
    }, [index])
    return ( 
        <section className="review-section">
            <FaQuoteLeft className="review-icon"/>
           <h2 className="review-title">Our Reviews</h2>
           <div className="review-container">
                <div className="review-main">
                    {reviews.map((review)=>{
                        const {id, image, name, title, quote} = review;
                        let position = "nextSlide";
                        if(id === index){
                            position = "currentSlide"
                        }
                        if(id === index - 1 || (index===1 && id === reviews.length) ){
                            position = "prevSlide"
                        }
                        return (
                            <article key={id} className={`review-item ${position}`}>
                                <div className="review-content">
                                    <img src={image} alt="review-img" className="review-img"/>
                                    <div className="review-info">
                                        <h6 className="name">{name}</h6>
                                        <p className="job">{title}</p>
                                        <p className="info words">{quote}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <div className="review-btns">
                    <button onClick={()=> setIndex(index - 1)} className="left-btn"><FaChevronCircleLeft /></button>
                    <button onClick={()=> setIndex(index + 1)} className="right-btn"><FaChevronCircleRight /></button>
                    <button onClick={getRandom} className="btn random-btn">Random</button>
                </div>
            </div> 
        </section>
     );
}
 
export default Review;