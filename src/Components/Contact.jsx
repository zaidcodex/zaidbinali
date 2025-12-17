import React from "react";
import githuLogo from "./Image/image-removebg-preview.png";
import mailLogo from "./Image/image.png";
import linkedinLogo from "./Image/imagemal.png";

const Contact = () => {
  return (
    <div className="bg-dark text-center py-4" id="contacts">
      <p className="text-light fs-4 fst-italic mb-4">GET IN TOUCH</p>

      <div className="d-flex justify-content-center gap-4 mb-3">
        <a href="https://github.com/zaidcodex" target="_blank" rel="noreferrer">
          <img
            src={githuLogo}
            alt="GitHub"
            width="50"
            height="50"
            className="rounded-circle bg-light p-2"
          />
        </a>
        <a href="https://linkedin.com">
          <img
            src={mailLogo}
            alt="GitHub"
            width="50"
            height="50"
            className="rounded-circle bg-light p-2"
          />
        </a>
        <a href="mailto:zaidalicodex@gmail.com" target="_blank" rel="noreferrer">
         <img
            src={linkedinLogo}
            alt="GitHub"
            width="50"
            height="50"
            className="rounded-circle bg-light p-2"
          />
        </a>
      </div>

      <p className="text-light small mb-0">ZAIDALICODEX@GMAIL.COM</p>
    </div>
  );
};

export default Contact;
