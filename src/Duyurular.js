import * as React from "react";
import { RiFileList3Line } from 'react-icons/ri';
import { SlGraduation } from 'react-icons/sl';
import duyurular from './images/duyuru.png';
import ekap from './images/ekap.png';
import ekaplogo from './images/ekaplogo.png';
import akademi from './images/akademi.png';
import { useState } from "react";
import Duyuru from './Duyuru';
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiMicLine } from "react-icons/ri";



function Duyurular() {

  const [duyuru, setDuyuru] = useState("mevzuat");


  return (
       <div className="dContainer"> 
        <div className="duyurular"> 
            <div className="dTitle"> 
                <h1> Duyurular</h1>
                <span> Tüm Duyurular </span>
            </div>
            <div className="dContent"> 
              <div className="left">
                  <div className={`kategori ${duyuru === "mevzuat" ? "duyuru" : ""}`} onClick={() => {setDuyuru("mevzuat")}}>
                  <RiFileList3Line size={20} color="#0D4D91"/>
                  <span> Mevzuat Duyuruları</span>
                  </div>
                  <div className={`kategori ${duyuru === "ekap" ? "duyuru" : ""}`} onClick={() => {setDuyuru("ekap")}}>
                    <img src={ekap} alt="ekap"/> 
                    <span> Ekap Duyuruları</span>
                     </div>
                  <div className={`kategori ${duyuru === "egitim" ? "duyuru" : ""}`} onClick={() => {setDuyuru("egitim")}}> 
                  <SlGraduation size={20} color="#0D4D91"/>
                  <span> Eğitim Duyuruları</span>
                  </div>
                  <div className={`kategori ${duyuru === "diger" ? "duyuru" : ""}`} onClick={() => {setDuyuru("diger")}}> 
                  <img src={duyurular} alt="duyuru"/> 
                  <span> Diğer Duyurular</span>
                  </div>
               </div>
              <div className="right"> 
              {/* mevzuat duyuruları */}
              <div className={` ${duyuru === "mevzuat" ? "show" : "hidden"}`}> 
                  <Duyuru baslik="01 Nisan 2023 / cumartesi"
                          paragraf="İhalelere Yönelik Başvuruların Elektronik Ortamda Yapılması Zorunluluğu Hakkında"/> 
                  <Duyuru baslik="01 Nisan 2023 / cumartesi"
                          paragraf="4734 Sayılı Kamu İhale Kanununun 13 üncü Maddesi Kapsamındaki İlanların Yayımlanacağı Mecralara İlişkin Mevzuat Değişiklikleri"/>  
                   <Duyuru baslik="29 Mart 2023 / çarşamba"
                          paragraf="Özel İmalat Süreci Gerektiren Mal Alımı İhalelerinde Tasarım, Üretim, Montaj, Test, Devreye Alma vb. Etaplara/Kısımlara İlişkin Yapılan Ara Hakediş Ödemeleri İçin Fiyat Farkı Hesaplanıp Hesaplanamayacağı Hususunda..."/> 
                  <Duyuru baslik="29 Mart 2023 / çarşamba"
                          paragraf="13.04.2022 Tarihli Ve 2022/DK.D-129 Sayılı Kurul Kararının 2 inci Maddesinin İptali Ve Yürütmesinin Durdurulması İstemiyle Açılan Davada Danıştay 13. Dairesinin 22.11.2022 Tarihli..."/>               
                </div> 

                 {/* ekap duyuruları */}
                 <div className={` ${duyuru === "ekap" ? "show" : "hidden"}`}> 
                 <Duyuru baslik="23 Ocak 2023 / pazartesi"
                          paragraf="Eşik Değerler ve Parasal Limitler ile İlan Ücretinin 1 Şubat 2023 Tarihi İtibarıyla Güncellenmesi Nedeni ile Kamu İhale Bülteni’nde Yayımlanacak İlanlara İlişkin EKAP Üzerinde Yürütülecek İşlemlerde Dikkat Edilecek Hususlar"/> 
                  <Duyuru baslik="16 Ocak 2023 / pazartesi"
                          paragraf="Kamu İhale Bülteni’nde Yayımlanacak İhale İlanlarının Yayın Ücreti"/>  
                  <Duyuru baslik="06 Ocak 2023 / cuma"
                          paragraf="13/01/2023 Tarihinde Yürürlüğe Girecek Yönetmelik ve Tebliğ Değişikliklerinden Dolayı EKAP Üzerinde Yürütülecek İşlemlerde Dikkat Edilecek Hususlar"/> 
                  </div>

                {/* egitim duyuruları */}  
                <div className={` ${duyuru === "egitim" ? "show" : "hidden"}`}>      
                <Duyuru baslik="04 Kasım 2022 / cuma"
                        paragraf="03-04 Kasım 2022 tarihlerinde Ankara'da Tevkifevleri Genel Müdürlüğüne kamu ihale mevzuatı eğitimi verilmiştir"/> 
                <Duyuru baslik="03 Kasım 2022 / perşembe"
                        paragraf="02-03 Kasım 2022 tarihlerinde Ankara'da Emniyet Genel Müdürlüğüne e-ihale eğitimi verilmiştir"/> 
                  </div>

                 {/* diger duyurular */}    
                 <div className={` ${duyuru === "diger" ? "show" : "hidden"}`}> 
                 <Duyuru baslik="06 Ocak 2023 / cuma"
                         paragraf="13 Ocak 2023 Cuma Günü Planlı Kesinti"/> 
                         </div>                    
              </div>
            </div>
        </div>

        <div className="linkler">
              <div className="link"> 
                  <img src={ekaplogo} alt="ekaplogo"/>
              </div>
              <div className="link"> 
                  <img src={akademi} alt="akademi"/>
              </div>
              <div className="link">

                  <RiGitRepositoryLine size={20} color="#829FD3" className="icon"/>
                  <span> Kamu İhale Mevzuatı </span>  
               </div>
              <div className="link"> 
                 <RiMicLine size={20} color="#829FD3" className="icon" />
                 <span> Serbest Kürsü </span>
              </div>
        </div>
       </div>
  );
}

export default Duyurular;
