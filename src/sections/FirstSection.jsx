import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Style from "./FirstSection.module.css"
import Btn from "../components/Btn";
import { useRef } from "react";



function FirstSection() {

  const crystal1 = useRef();
  const crystal2 = useRef();
  const crystal3 = useRef();
  
  
  
  useGSAP(() => {
    gsap.to(crystal1.current, {
      y: -150,
      scrollTrigger: {
        trigger: crystal2.current,
        scroller: "body",
        start: "top 400rem",
        end: "450rem",
        scrub: true,
        // pin: true
      },
    });
  });


  useGSAP(() => {
    gsap.to(crystal2.current, {
      y: -150,
      scrollTrigger: {
        trigger: crystal2.current,
        scroller: "body",
        start: "top 400rem",
        end: "450rem",
        scrub: true,
        // pin: true
      },
    });
  });


  useGSAP(() => {
    gsap.to(crystal3.current, {
      y: -150,
      scrollTrigger: {
        trigger: crystal3.current,
        scroller: "body",
        start: "top 400rem",
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
          <div className={Style.wrapper}  >
            <img className={Style.crys1} ref={crystal1} src="./crystal1.png" alt="crystal1" />
            <img className={Style.crys2} ref={crystal2} src="./crystal2.png" alt="crystar2" />
            <img className={Style.crys3} ref={crystal3} src="./crystal3.png" alt="crystal3" />
          </div>
        </div>
      </div>
      <br />
      <br />
        </div>
    )
}

export default FirstSection
