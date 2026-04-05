import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ft-footer {
          position: relative;
          overflow: hidden;
          padding: 2.8rem 1.5rem;
          background: linear-gradient(180deg, #06040f 0%, #030208 100%);
          border-top: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }

        /* shimmer top line */
        .ft-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0, #f72585);
          background-size: 200%;
          animation: ftShimmer 4s linear infinite;
        }
        @keyframes ftShimmer { 0%{background-position:0%} 100%{background-position:200%} }

        /* subtle star dots */
        .ft-footer::after {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .ft-inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          align-items: center; gap: 0.5rem;
        }

        .ft-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; font-weight: 300;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.3px;
          margin: 0;
        }

        .ft-heart {
          display: inline-block;
          animation: ftBeat 1.4s ease-in-out infinite;
          background: linear-gradient(135deg, #f72585, #ff6b6b);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-style: normal;
        }
        @keyframes ftBeat {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.3); }
        }

        .ft-name {
          font-family: 'Syne', sans-serif; font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #c8a8f8 50%, #f72585 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .ft-year {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 400;
          color: rgba(255,255,255,0.18);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>

      <footer className="ft-footer">
        <div className="ft-inner">
          <p className="ft-text">
            Made with <i className="ft-heart">♥</i> by <span className="ft-name">Zaid Bin Ali</span>
          </p>
          <p className="ft-year">© {year} · All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;