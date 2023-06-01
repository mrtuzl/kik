import React, { useState } from 'react';

function Istatistikler() {

const [zaman, setZaman] = useState("gun");

  return (
    <div className='iContainer'>
        <div className='iTitle'> 
        <div className='istatistikler'> 
            <h1> İstatistikler </h1>
        </div>

          <div className='times'> 
            <div className={`time ${zaman === "gun" ? "timeActive" : ""}`} onClick={() => setZaman("gun")}> <h1> Bugün </h1></div>
            <div className={`time ${zaman === "hafta" ? "timeActive" : ""}`} onClick={() => setZaman("hafta")}> <h1> Bu Hafta </h1></div>
            <div className={`time ${zaman === "ay" ? "timeActive" : ""}`} onClick={() => setZaman("ay")}> <h1> Bu Ay </h1></div>
            <div className={`time ${zaman === "yil" ? "timeActive" : ""}`} onClick={() => setZaman("yil")}> <h1> Bu Yıl </h1></div>
          </div>
        </div>
        <div className='iContent'>
                    <div className='istatistik'> 
                            <div className='circle'> {zaman === "gun" ? "270" : zaman === "hafta" ? "537" : zaman === "ay" ? "5.228" : "25.659"} </div>
                            <span> İhale İlanı Sayısı </span>
                    </div>
                    <div className='istatistik'>
                            <div className='circle'> {zaman === "gun" ? "306" : zaman === "hafta" ? "570" : zaman === "ay" ? "6.162" : "32.172"} </div>
                            <span> İhale Sayısı </span>
                    </div>
                    <div className='istatistik'>
                            <div className='circle'> {zaman === "gun" ? "95" : zaman === "hafta" ? "277" : zaman === "ay" ? "6.622" : "44.517"} </div>
                            <span> Bildirilen Sözleşme Sayısı </span> 
                    </div>
                    <div className='istatistik'> 
                            <div className='circle'> {zaman === "gun" ? "283 milyon" : zaman === "hafta" ? "1 milyar" : zaman === "ay" ? "150 milyar" : "676 milyar"} </div>
                            <span> Bildirilen Sözleşme Tutarı (₺) </span>
                    </div>
                    <div className='istatistik'> 
                           <div className='circle'> {zaman === "gun" ? "4" : zaman === "hafta" ? "10" : zaman === "ay" ? "109" : "701"} </div>
                            <span> İtirazen Şikayet Sayısı </span>
                    </div>
        </div>
    </div>
  );
}
export default Istatistikler;