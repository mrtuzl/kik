import * as React from "react";
import Duyurular from "./Duyurular";
import Kurul from "./Kurul";
import Sorgulamalar from "./Sorgulamalar";
import Istatistikler from "./Istatistikler";


function Main() {
  return (
       <div className="mContainer"> 
            <div className="main"> 
                 <Duyurular/>
                 <Kurul/>
                 <Sorgulamalar/>
                 <Istatistikler/>
            </div>
       </div>
  );
}

export default Main;
