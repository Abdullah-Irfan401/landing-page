// import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  // const crystals = useRef();

  useGSAP(() => {
    gsap.to(".crys1 , .crys2 , .crys3", {
      y: -150,
      scrollTrigger: {
        trigger: ".crys1 , .crys2 , .crys3",
        scroller: "body",
        markers: true,
        start: "top",
        end: "450rem",
        scrub: true,
        // pin: true
      },
    });
  });

  return (
    <div className="home">
      <div className="maincontainer">
        <div className="container">
          <div className="background">
            <div className="triangle1"></div>
            <div className="triangle2"></div>
            <div className="triangle3"></div>
            <div className="triangle4"></div>
          </div>
          <div className="content">
            <h1>
              Skills Management <br /> Software for <br /> Ambitious HR.
            </h1>
            <p>
              Start your skills journey with us: build your skills-based
              strategy with Europe’s <br /> most integrated AI-powered talent
              management platform
            </p>
            <br />
            <a href="#" className="btn">
              Talk Talent With Us
            </a>
          </div>
          <div className="wrapper">
            <img className="crys1" src="dist\crystal1.png" alt="crystal1" />
            <img className="crys2" src="public\crystal2.png" alt="crystar2" />
            <img className="crys3" src="public\crystal3.png" alt="crystal3" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="section-logo">
        <h1 className="logoh1">1M+ employees trusting us with their careers</h1>
        <div className="row1">
          <img className="logo" src="public\totalenergies.png" alt="totalrnergies" />
          <img className="logo" src="public\sncf.png" alt="sncf" />
          <img className="logo" src="public\ey.png" alt="ey" />
          <img className="logo" src="public\eiffage.png" alt="eiffage" />
          <img className="logo" src="public\atr.png" alt="atr" />
        </div>
        <br />
        <div className="hr"></div>
        <div className="row2">
          <img className="logo" src="public\veolia.png" alt="veolia" />
          <img className="logo" src="public\societegenerale.png" alt="societegenerale" />
          <img className="logo" src="public\bearingpoint.png" alt="bearingpoint" />
          <img className="logo" src="public\segula.png" alt="segula" />
          <img className="logo" src="public\creditagricole.png" alt="creditagricole" />
        </div>
        <div className="hr"></div>
      </div>
      <div className="section-explain">
        <h1>Start your skills journey with us </h1>
      </div>
    </div>
  );
}

export default App;
