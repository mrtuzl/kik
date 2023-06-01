
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (


    <Swiper className='swipe'
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={{ enabled: true,
      }}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{ clickable: true}}
     
      
    >
       
         <SwiperSlide>
         <div className='sContainer'> 
            <div className='slide'> 
                <h1> 
                Kamu İhale Kurumu Sözleşmeli Bilişim Personeli Sözlü Sınavına Girmeye Hak Kazanan Adaylar
                </h1>
                <div>  <span> Devamını Oku </span> </div>
                </div>
           </div>
      </SwiperSlide>

      <SwiperSlide> 
        <div className='sContainer'> 
            <div className='slide'> 
                <h1> 
                Büro Görevlisi, İletişim Görevlisi Giriş Sınavı Duyurusu
                </h1>
                <div>  <span> Devamını Oku </span> </div>
                </div>
           </div>
           </SwiperSlide>

      <SwiperSlide>
      <div className='sContainer'> 
            <div className='slide'> 
                <h1> 
                Sözleşmeli Bilişim Personeli Giriş Sınavı Duyurusu
                </h1>
                <div>  <span> Devamını Oku </span> </div>
                </div>
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='sContainer'> 
            <div className='slide'> 
                <h1> 
                İhalelere Yönelik Başvuruların Elektronik Ortamda Yapılması Zorunluluğu Hakkında
                </h1>
                <div>  <span> Devamını Oku </span> </div>
                </div>
           </div>
      </SwiperSlide>
       
      <SwiperSlide>
      <div className='sContainer'> 
            <div className='slide'> 
                <h1> 
                4734 Sayılı Kamu İhale Kanununun 13 üncü Maddesi Kapsamındaki İlanların Yayımlanacağı Mecralara İlişkin Mevzuat Değişiklikleri
                </h1>
                <div>  <span> Devamını Oku </span> </div>
                </div>
           </div>
      </SwiperSlide>
  


      
      
    </Swiper>
  );
};
export default Slider;