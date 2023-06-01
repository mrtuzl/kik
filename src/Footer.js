import React from 'react';
import kikLogo from './images/kikLogoDikey.png';
import { RiMapPinLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";


function Footer() {


  return (
    <div className='fContainer'>
       <div className='fWrapper'> 

                <div className='footer a'> <img src={kikLogo} alt='kikLogo'/> </div>
                <div className='footer b'> 
                    <div> 
                    <RiMapPinLine size={60} color="white"/>
                    <p> İşçi Blokları Mahallesi Mevlana Bulvarı No:186 06520 Çankaya / ANKARA </p>
                    </div>
                    <div> 
                    <RiPhoneLine size={25} color="white"/>
                    <p> +(90) 312 218 45 00 (pbx) </p>
                    </div>
                    <div> 
                    <RiMailLine size={25} color="white"/>
                    <p> kik@hs01.kep.tr </p>
                    </div>
                    <div className='medya'> 
                    <div> <a href="https://twitter.com/ihalegovtr" target="_blank" rel="noreferrer"> <RiTwitterFill size={30} color="white"/> </a> </div> 
                    <div> <a href="https://tr.linkedin.com/company/kamuihalekurumu" target="_blank" rel="noreferrer"> <RiLinkedinFill size={30} color="white"/> </a> </div> 
                    <div> <a href="https://www.youtube.com/c/EkapAkademi" target="_blank" rel="noreferrer"> <RiYoutubeFill size={30} color="white"/>  </a>  </div> 
                    
                    </div>    
                
                </div>
                <div className='footer c'> 
                      <h3> Kurumsal </h3>
                      <a href="https://www.ihale.gov.tr/hizmet_standartlari_tablosu-26-1.html" target="_blank" rel="noreferrer"> Hizmet Standartları Tablosu </a>
                      <a href="https://www.ihale.gov.tr/hizmet_envanteri_tablosu-62-1.html" target="_blank" rel="noreferrer"> Hizmet Envanteri Tablosu </a>
                      <a href="https://www.ihale.gov.tr/kalite_standartlari_programi-120-1.html" target="_blank" rel="noreferrer"> Kalite Standartları Programı </a>
                      <a href="https://www.ihale.gov.tr/Galeri.aspx" target="_blank" rel="noreferrer"> Galeri </a>
                </div>
                <div className='footer d'> 
                <h3> Hızlı Erişim </h3>
                      <a href="https://www.ihale.gov.tr/ihale_araclari-111-1.html" target="_blank" rel="noreferrer"> İhale Araçları </a>
                      <a href="http://ekapakademi.kik.gov.tr/sozluk/" target="_blank" rel="noreferrer"> İhale Terimler Sözlüğü </a>
                      <a href="http://www.kamuihaleuzmanlari.org/" target="_blank" rel="noreferrer"> Kamu İhale Uzmanları Derneği </a>
                      <a href="https://www.ihale.gov.tr/site_haritasi-142-1.html" target="_blank" rel="noreferrer"> Site Haritası </a>
                      <a href="https://diyalog.kik.gov.tr/" target="_blank" rel="noreferrer"> KİK Diyalog </a>
                </div>
                <div className='footer e'>
                  <div > 
                  <RiCustomerService2Line size={100} color="white" /> <span> EKAP Etkileşim Merkezi</span>
                  </div>
                  <h4> 444 0 545 </h4>
                  <h4> 444 0 KİK </h4>
                
                </div>
       
       </div>
    </div>
  );
}
export default Footer;