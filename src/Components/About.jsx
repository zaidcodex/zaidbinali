import React from "react";

const About = () => {
  return (
    <div id="about" className="py-5" style={{ backgroundColor: "#b3b3b3ff" }}>
      <div className="container text-center">
        {/* Heading */}
        <h1
          className="zilla-slab-
           fw-bold mb-4"
          style={{ fontSize: "42px", color: "#333" }}
        >
          About
        </h1>
        <hr
          className="mx-auto mb-5"
        //   style={{
        //     width: "80px",
        //     border: "2px solid #555",
        //     opacity: "0.7",
        //   }}
        />

        {/* Paragraph */}
        <p
          className="mx-auto"
          style={{
            fontSize: "27px",
            lineHeight: "1.8",
            color: "#444",
            // maxWidth: "900px",
            // textAlign: "justify",
            padding: "0 20px",
          }}
        >
          I am always on a quest to learn and grow as much as possible with the
          most current technologies and skills. Thanks to having worked for
          several years in customer experience in addition to my creative
          instinct, I possess an innate sense of empathy and intuition. This
          compels me to assure that the user experience is constantly the first
          priority of any project I am working on.
          {/* <br />
          <br />
          Whether I am planning, wireframing, prototyping, or developing, my
          goal is for all users to enjoy my products to the fullest extent with
          optimal ease-of-use and distinct modern design. */}
        </p>
      </div>
    </div>
  );
};

export default About;
