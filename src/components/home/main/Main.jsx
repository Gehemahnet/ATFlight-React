import { useEffect, useState } from "react";
import "../../../styles/UI.css"
import "../../../styles/home/main/main.css";

import MainDefault from "./Main__default";

import MainCaterogies from "./Main__categories";

const Main = ({setVisible, homePageState}) =>{
  

  return(
    <main className="main">
      <div className="wrapper _main">
        <MainDefault
          className={homePageState === "Default"? "main__content-default _active": "main__content-default"}
          setVisible={setVisible}
        />
        <MainCaterogies
          className={homePageState !== "Default"? "main__content-categories _active" : "main__content-categories"}
          homePageState={homePageState}
        />
      </div>
    </main>
  )
}

export default Main