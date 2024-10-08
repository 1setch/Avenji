import big_img from "./../../img/spacejoy-IH7wPsjwomc-unsplash (1) 1.png";
import small_img from "./../../img/michael-oxendine-GHCVUtBECuY-unsplash (1) 1.png";
import "./hero.css"

const Hero =()=>{
    return(
     <div className="hero_body" id="hero">
        <div className="hero_body_title">
            <h1>Эксклюзивная<br></br> и нестандартная мебель для дома</h1>
            <a href="#uform">Заказать проект</a> 
        </div>
        <div className="hero_body_imgs">
            <p>Мы можем произвести любую мебель для <br></br> вашего проекта и найти производственное <br></br>решение любой задумки.</p>
            <img src={big_img} alt="" className="hero_body_img_big"/>
            <img src={small_img} alt="" className="hero_body_img_small"/>
        </div>   
     </div>
    )

}
export default Hero;