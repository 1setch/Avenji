import logo from "./../../img/logo.png";
import burger from "./../../img/burger.png";
import "./header.css"
import { useState } from "react";

const Header =()=>{

    const [isOpen, setOpen] = useState(false);

    return(
     <header>
        <div className="header_body">
            <div className="header_logo">
                <img src={logo}></img>
            </div>

            <div className="header_menu">
                <a href="#about">О нас</a>
                <a href="#projects">Проекты</a>
                <a href="#steps">Материалы</a>
                <a href="#testimonials">Отзывы</a>
            </div>

            <div className="header_number">
                <a href="tel:+79991112233">+7 999 999 99 99</a>
            </div>

            <div className="header_burger"> 
                <div className={`overlay ${isOpen?"active":""}`}></div>
                <button className="burger_btn" onClick={()=>setOpen(!isOpen)}>
                    <img src={burger}></img>
                </button>
                <nav className={`mob_menu ${isOpen?"active":""}`}>
                    <li><a href="#about" onClick={()=>setOpen(!isOpen)}>О нас</a></li>
                    <li><a href="#projects" onClick={()=>setOpen(!isOpen)}>Проекты</a></li>
                    <li><a href="#steps" onClick={()=>setOpen(!isOpen)}>Материалы</a></li>
                    <li><a href="#testimonials" onClick={()=>setOpen(!isOpen)}>Отзывы</a></li>
                </nav>
                
               
            </div>
        </div>
     </header>
    )

}
export default Header;