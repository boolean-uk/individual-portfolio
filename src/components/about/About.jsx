import "./about.css";
import Award from "../../img/award.png";
import me from '../../img/me.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
        Enthusiastically embracing my lifelong passion for aviation, I am driven by the dream of becoming a pilot. From early childhood, the sight of airplanes has ignited a relentless pursuit of this goal, reflected in my continuous study of aviation history, technological advancements, and immersive flight simulations. My heart is set on navigating the boundless skies, and my journey towards becoming a pilot is both a career choice and an unwavering personal commitment.
        </p>
     
      </div>
    </div>
  );
};

export default About;
