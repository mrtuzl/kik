import React from 'react';
import { RiFileTextLine } from "react-icons/ri";
import { RiFolderForbidLine } from "react-icons/ri";
import { RiFileCopy2Line } from "react-icons/ri";
import { RiNewspaperLine } from "react-icons/ri";


function Sorgulamalar() {

  return (
    <div className='ksContainer'>
        <div className='ksTitle'> 
            <h1> Sorgulamalar </h1>
        </div>

        <div className='ksContent'>
                    <div className='karar-sorgu'> 
                            <RiFileTextLine size={20} color="#829FD3" className="icon" />
                            <span> İtirazen Şikayet Başvurusu </span> 
                    </div>
                    <div className='karar-sorgu'>
                            <RiFolderForbidLine size={20} color="#829FD3" className="icon" /> 
                            <span>  Yasaklılık </span> 
                    </div>
                    <div className='karar-sorgu'>
                            <RiFileCopy2Line size={20} color="#829FD3" className="icon" /> 
                            <span> Sözleşme Devri </span> 
                    </div>
                    <div className='karar-sorgu'> 
                             <RiNewspaperLine size={20} color="#829FD3" className="icon" /> 
                            <span> Kamu İhale Bülteni </span> 
                    </div>
        </div>
    </div>
  );
}
export default Sorgulamalar;