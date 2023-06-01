import React from 'react';
import tcbb from './images/tbmm-hover.png';
import cmhrbsknlg from './images/cumhurbaskanligi-hover.png'
import maliye from './images/maliye-hover.png';
import edevlet from './images/edevlet-hover.png';
import cimer from './images/cimer-hover.png';
import mevzuat from './images/mevzuat-hover.png';
import gazete from './images/resmigazete-hover.png';


function Logolar() {


  return (
    <div className='lContainer'>
        <div className='lWrapper'> 
          <a href="https://www.tccb.gov.tr/" target="_blank" rel="noreferrer"> 
            <img src={cmhrbsknlg} alt='cmhrbsknlg' className='logo'/>
          </a>
          <a href="https://www.tbmm.gov.tr/" target="_blank" rel="noreferrer">
            <img src={tcbb} alt='tcbb' className='logo'/>
          </a>
          <a href="https://hmb.gov.tr/" target="_blank" rel="noreferrer">
            <img src={maliye} alt='maliye' className='logo'/>
          </a>
          <a href="https://www.turkiye.gov.tr/" target="_blank" rel="noreferrer">
            <img src={edevlet} alt='edevlet' className='logo'/>
          </a>
          <a href="https://www.cimer.gov.tr/" target="_blank" rel="noreferrer">
           <img src={cimer} alt='cimer' className='logo'/>
          </a>
          <a href="https://www.mevzuat.gov.tr/" target="_blank" rel="noreferrer">
            <img src={mevzuat} alt='mevzuat' className='logo'/>
          </a>
          <a href="https://www.resmigazete.gov.tr/" target="_blank" rel="noreferrer">
            <img src={gazete} alt='gazete' className='logo gazete'/>
          </a>
            
           
            
    </div>
    </div>
  );
}
export default Logolar;