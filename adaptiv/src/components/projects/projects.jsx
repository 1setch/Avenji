import proj_img1 from "./../../img/project-img1.png";
import proj_img2 from "./../../img/pi2.png";
import proj_img3 from "./../../img/pi3.png";
import proj_img4 from "./../../img/pi4.png";
import proj_img5 from "./../../img/project5.png";
import proj_img6 from "./../../img/project6.png";

import "./projects.css"

const Projects =()=>{
    return(
     <div className="projects_body" id="projects">
       <h2> Проекты</h2>
       <div className="projects_imgs">
            <div className="slider">
            <a href="#hero">
              <figure className="card">
                <img src={proj_img1} alt="" />
                
                  <figcaption>
                    Тумба
                  </figcaption>
              </figure>
            </a>
            <a href="#hero">
              <figure className="card">
                <img src={proj_img2} alt="" />
                
                  <figcaption>
                    Тумба
                  </figcaption>
              </figure>
            </a>
            <a href="#hero">
              <figure className="card">
                <img src={proj_img3} alt="" />
                
                  <figcaption>
                    Тумба
                  </figcaption>
              </figure>
            </a>
            <a href="#hero">
              <figure className="card">
                <img src={proj_img4} alt="" />
                
                  <figcaption>
                    Тумба
                  </figcaption>
              </figure>
            </a>
            <a href="#hero">
              <figure className="card">
                <img src={proj_img5} alt="" />
                
                  <figcaption>
                    Тумба
                  </figcaption>
              </figure>
            </a>
            <a href="#hero">
              <figure className="card">
                <img src={proj_img6} alt="" />
                
                  <figcaption>
                    Тумба
                  </figcaption>
              </figure>
            </a>






            </div>
            

       </div>
     </div>
    )

}
export default Projects;