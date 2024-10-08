import review_icon from "./../../img/Vector.png";
import "./testim.css"

const Testimonials =()=>{
    return(
     <div className="testimonials_body" id="testimonials">
       <h2> Отзывы</h2>
       <div className="reviews">
            <div className="review_item">
                <img src={review_icon} alt="rr" className="rewiew_img" />
                <div className="rewiev_author">Игорь Антонов</div>
                <p>Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</p>
            </div>

            <div className="review_item">
                <img src={review_icon} alt="rr" className="rewiew_img" />
                <div className="rewiev_author">Ольга Иванова</div>
                <p>После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</p>
            </div>

            <div className="review_item">
                <img src={review_icon} alt="rr" className="rewiew_img" />
                <div className="rewiev_author">Аркадий Макаров</div>
                <p>Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</p>
            </div>
            
       </div>
     </div>
    )

}
export default Testimonials;