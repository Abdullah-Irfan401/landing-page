import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Style from "./FirstSection.module.css"
import Btn from "../components/Btn";




function FirstSection() {

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
        <div>
            <div className={Style.maincontainer}>
        <div className={Style.container}>
          <div className={Style.background}>
            <div className={Style.triangle1}></div>
            <div className={Style.triangle2}></div>
            <div className={Style.triangle3}></div>
            <div className={Style.triangle4}></div>
          </div>
          <div className={Style.content}>
            <h1>
              Skills Management <br /> Software for <br /> Ambitious HR.
            </h1>
            <p>
              Start your skills journey with us: build your skills-based
              strategy with Europe’s <br /> most integrated AI-powered talent
              management platform
            </p>
            <br />
            
            <Btn/>

          </div>
          <div className={Style.wrapper}>
            <img className={Style.crys1} src="./crystal1.png" alt="crystal1" />
            <img className={Style.crys2} src="./crystal2.png" alt="crystar2" />
            <img className={Style.crys3} src="./crystal3.png" alt="crystal3" />
          </div>
        </div>
      </div>
      <br />
      <br />
        </div>
    )
}

export default FirstSection
