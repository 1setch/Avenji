import urofm_img from "./../../img/bilal-mansuri-yJ78NE83YH8-unsplash 1.png";
import urofm_apps from "./../../img/apps.png";
import "./uform.css"

const Uform =()=>{
    return(
     <div className="uform_body" id="uform">
        <img src={urofm_img} alt="" className="form_preview"/>
        <form action="">
            <h2>Хотите заказать проект?</h2>
            <p>Оставьте заявку, и мы вам перезвоним </p>
            <input type="text" name="" id="" placeholder="Имя" />
            <input type="email" name="" id="" placeholder="E-mail"/>
            <input type="tel" name="" id="" placeholder="Телефон"/>
            <button>Отправить заявку</button>
            <img src={urofm_apps} alt="" />
        </form>
        
     </div>
    )

}
export default Uform;