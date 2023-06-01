import React from 'react';
import { RiFileWarningLine } from "react-icons/ri";
import { RiScales3Line } from "react-icons/ri";
import { RiAuctionLine } from "react-icons/ri";
import { RiSurveyLine } from "react-icons/ri";


function Kurul() {

  return (
    <div className='ksContainer'>
        <div className='ksTitle'> 
            <h1> Kurul Kararları </h1>
        </div>

        <div className='ksContent'>
                    <div className='karar-sorgu'> 
                            <RiFileWarningLine size={20} color="#829FD3" className="icon" />
                            <span> Uyuşmazlık Kararları </span> 
                    </div>
                    <div className='karar-sorgu'>
                            <RiScales3Line size={20} color="#829FD3" className="icon" /> 
                            <span> Düzenleyici Kararlar </span> 
                    </div>
                    <div className='karar-sorgu'>
                            <RiAuctionLine size={20} color="#829FD3" className="icon" /> 
                            <span> Mahkeme Kararları </span> 
                    </div>
                    <div className='karar-sorgu'> 
                             <RiSurveyLine size={20} color="#829FD3" className="icon" /> 
                            <span> Kurul Karar Tutanakları </span> 
                    </div>
        </div>
    </div>
  );
}
export default Kurul;