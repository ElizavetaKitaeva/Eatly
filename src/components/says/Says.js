import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import star from "./img/star.svg"

const Says = ({name, date, text, rating, avatar}) => {
  return ( 
    
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='says-card'>
            <div className='user'>
              <img className="user__avatar" src={avatar} alt='avatar'/>
              <div className='user__info'>
                <p className='user__name'>{name}</p>
                <p className='user__date'>{date}</p>
              </div>
            </div>
            <article className='feedback'>
              <p className='feedback__text'>{text}</p>
            </article>
            <div className="rating">
              <img className="rating__image" src={star} alt='avatar'/>
            </div>
            
          </div>
        </SwiperSlide>
      </Swiper>
    
  );
}
 
export default Says;