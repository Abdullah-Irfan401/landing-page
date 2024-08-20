import Style from "./SecondSection.module.css"


function SecondSection() {
    return (
        <div>
            <div className={Style.sectionlogo}>
        <h1 className={Style.logoh1}>1M+ employees trusting us with their careers</h1>
        <div className={Style.row1}>
          <img className={Style.logo} src="./totalenergies.png" alt="totalrnergies" />
          <img className={Style.logo} src="./sncf.png" alt="sncf" />
          <img className={Style.logo} src="./ey.png" alt="ey" />
          <img className={Style.logo} src="./eiffage.png" alt="eiffage" />
          <img className={Style.logo} src="./atr.png" alt="atr" />
        </div>
        <br />
        <div className={Style.hr}></div>
        <div className={Style.row2}>
          <img className={Style.logo} src="./veolia.png" alt="veolia" />
          <img className={Style.logo} src="./societegenerale.png" alt="societegenerale" />
          <img className={Style.logo} src="./bearingpoint.png" alt="bearingpoint" />
          <img className={Style.logo} src="./segula.png" alt="segula" />
          <img className={Style.logo} src="./creditagricole.png" alt="creditagricole" />
        </div>
        <div className={Style.hr}></div>
      </div>
        </div>
    )
}

export default SecondSection
