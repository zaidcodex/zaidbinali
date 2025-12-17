import React from "react";
import "./fonts.css";

const Skills = () => {
  const skills = [
    { name: "HTML", img: "https://www.lianapenn.com/images/HTML5.png" },
    { name: "CSS", img: "https://www.lianapenn.com/images/css3.png" },
    { name: "Javascript", img: "https://www.lianapenn.com/images/learn-javascript.png" },
    { name: "Node.js/Express", img: "https://www.lianapenn.com/images/node-express.png" },
    { name: "React", img: "https://www.lianapenn.com/images/react.png" },
    { name: "Github", img: "https://www.lianapenn.com/images/github.png" },
  ];

  return (
    <div className="m-4 p-4" >
      <div className="text-center my-5 py-5" >
        <p
          className="libre-baskerville-regular mb-4"
          style={{ fontSize: "28px" }}
        >
HI, I’M ZAID BIN ALI — A PASSIONATE WEB DEVELOPER AND UX DESIGNER BASED IN KARACHI.
        </p>
        <p
          style={{ fontSize: "28px" }}
        >
         WITH A STRONG CREATIVE MINDSET AND A BACKGROUND IN TECHNOLOGY AND DESIGN, I LOVE PUSHING BOUNDARIES TO CRAFT UNIQUE, USER-FOCUSED DIGITAL EXPERIENCES. I’M A FAST LEARNER WHO THRIVES IN COLLABORATIVE ENVIRONMENTS, COMBINING ANALYTICAL THINKING, CREATIVITY, AND CALM PROBLEM-SOLVING TO DELIVER IMPACTFUL, DETAIL-DRIVEN RESULTS EVEN UNDER PRESSURE.
        </p>
      </div>

      <div className="text-center"  id="skills">
        <h1 className="zilla-slab-light mb-4 px-5" style={{ fontSize: "42px" }}>
          Skills
          <hr/>
        </h1>

        {/* Skills Grid */}
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center my-5">
            {skills.map((skill, index) => (
              <div className="col d-flex justify-content-center" key={index}>
                <div
                  className="text-center p-3 shadow-sm rounded"
                  style={{
                    width: "160px",
                    transition: "transform 0.3s ease",
                    backgroundColor: "#fff",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <h6 className="mt-2">{skill.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
