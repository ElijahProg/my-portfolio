import "./about.css"
import elijahDesk from "../../img/laptop.jpeg"
import desk from "../../img/elijahDesk.jpg"
import snvDesk from "../../img/snv-desktop.png"

const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={elijahDesk} 
                        alt="desk" 
                        className="a-img"
                    />
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Forward-thinking Software Engineer with background working productively in dynamic environments. </p>
                <p className="a-desc">Fluent in C#, PHP and Javascript programming languages used to develop software within company. Proud team player focused on achieving project objectives with speed and accuracy. </p>
                <div className="a-award">
                    <img src={snvDesk} alt="award-img" className="a-award-img"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Award title detail
                        </h4>
                        <p className="a-award-desc">
                        Forward-thinking Software Engineer with background working productively in dynamic environments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About