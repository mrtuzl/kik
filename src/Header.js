import * as React from "react";
import { AiOutlineHome} from "react-icons/ai";
import { AiOutlineInfoCircle} from "react-icons/ai";
import { BsTelephone} from "react-icons/bs";
import { BiSearch} from "react-icons/bi";
import Ataturk from "../src/images/ataturk.png";
import logo from "../src/images/kik-logo.png";
import { Navbar, Nav } from 'rsuite';
import { useState } from "react";



function Header() {

    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 50) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
   console.log(window.scrollY)

    window.addEventListener("scroll" , setFixed)

  return(
   
        <div className={fix ? 'hContainer fixed' : 'hContainer'}> 
        <div className="hWrapper">
            <div className="header"> 
           
            <div className="anasayfa">
            <AiOutlineHome style={{color: "white"}}/> 
            </div> 

            <div className="bilgi"> 
                <AiOutlineInfoCircle style={{color: "white"}}/>
                <a href="https://www.ihale.gov.tr/bilgi_edinme-101-1.html" target="_blank" rel="noreferrer"> Bilgi Edinme </a>
            </div> 
            
            <div className="iletisim">
                <BsTelephone style={{color: "white"}}/>
                <a href="https://www.ihale.gov.tr/iletisim.aspx" target="_blank" rel="noreferrer"> İletişim </a>
            </div>

            <div className="arama"> 
                <BiSearch style={{color: "white"}}/>
            </div>
            <div className="img"> 
                 <img src={Ataturk} alt="Mustafa Kemal Atatürk"/>
            </div>
            </div>
            </div>

            <div className="mWrapper"> 
            <div className="menu"> 
              <div className="logo">
                    <img src={logo} alt=""/> 
              </div>
              <div className="nav">
              <Navbar className="navbar" appearance="subtl" theme="red">
                <Nav>
                <Nav.Menu title="Kurum" className="item">
                        <Nav.Item>Başkan ve Kurul Üyeleri</Nav.Item>
                        <Nav.Item>Başkan Yardımcıları</Nav.Item>
                        <Nav.Item>Teşkilat Şeması</Nav.Item>
                        <Nav.Item>Faaliyer Raporları</Nav.Item>
                        <Nav.Item>Kurumsal Kimlik</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu title="Mevzuat">
                        <Nav.Item>Kamu İhale Mevzuatı</Nav.Item>
                        <Nav.Item>Kurum Mevzuatı</Nav.Item>
                        <Nav.Item>Kurul Kararları</Nav.Item>
                        <Nav.Item>Dilekçe Örnekleri ve Formlar</Nav.Item>
                        <Nav.Item>Yardımcı Belgeler</Nav.Item>
                        <Nav.Item>Public Procurement Law</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu title="İstatistikler">
                        <Nav.Item>Kamu Alımları İzleme Raporları</Nav.Item>
                        <Nav.Item>Ulusal Veri Yayınlama Takvimi</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu title="Eğitim">
                        <Nav.Item>EKAP Akademi </Nav.Item>
                        <Nav.Item>İhale Terimleri Sözlüğü</Nav.Item>
                        <Nav.Item>Kurum Yayınları</Nav.Item>
                        <Nav.Item>Sertifikalı Eğitim Programları</Nav.Item>
                        <Nav.Item>Staj Başvuruları</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu title="Uluslararası">
                        <Nav.Item>Uluslararası Bağlantılar</Nav.Item>
                        <Nav.Item>Uluslararası Mevzuat</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu title="EKAP">
                        <Nav.Item>EKAP Ana Sayfa</Nav.Item>
                        <Nav.Item>İhale Arama</Nav.Item>
                        <Nav.Item>Doğrudan Temin Arama</Nav.Item>
                    </Nav.Menu>
                </Nav>
            </Navbar>
                </div> 
            </div>
                </div>
         
        </div>
    
  );
}

export default Header;
