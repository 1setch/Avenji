
import "./about.css"

const About =()=>{
    return(
     <div className="about_body" id="about">
        <div className="about_title">
            <h2 className="pc_title">Более 5 лет создаем <br /> мебель для вашего <br /> комфорта</h2>
            <h2 className="mob_title">О компании</h2>
        </div>
        <div className="about_description">
            <p>Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</p>
            <p>Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</p>
            <p>В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</p>
        </div>
        <div className="about_description_item">
            <h3>1 год</h3>
            <p>гарантии на всю продукцию</p>
        </div>
        <div className="about_description_item">
            <h3>300+</h3>
            <p>выполненных проектов</p>
        </div>
        <div className="about_description_item">
            <h3>15 дней</h3>
            <p>срок производства</p>
        </div>
     </div>
    )

}
export default About;