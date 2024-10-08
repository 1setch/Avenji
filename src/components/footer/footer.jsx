import logo from "./../../img/logo.png";
import "./footer.css"

const Footer =()=>{
    return(
     <footer id="footer">
        <div className="copyright">
            © 2023 Aveji
        </div>
        <div className="copyright2"> Все права защищены</div>

        <div className="privacy_n_delivery">
            <a href="" className="privacy_policy">Политика конфеденциальности</a>
            <span> / </span>
            <a href="" className="delivery">Оплата и доставка</a>
        </div>

        <div className="social_networks">
            <a href="" className="vk">Вконтакте</a>
            <a href="" className="tg">Телеграм</a>
        </div>

     </footer>
    )

}
export default Footer;