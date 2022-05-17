import "./intro.css";
import Me from "../../img/me1.png"
const Intro = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, I am</h2>
                    <h1 className="i-name">Elias Yalew</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">System Design</div>
                            <div className="i-title-item">DevOps Engineering</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Forward-thinking Software Engineer with background working productively in dynamic environments. Fluent in C#, PHP and Javascript programming languages used to develop software within company. Proud team player focused on achieving project objectives with speed and accuracy. 
                    </p>
                </div>
                {/* <img src="https://img.icons8.com/ios/30/000000/mouse-scrolling.png" alt="screw" className="i-scroll"/> */}
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro