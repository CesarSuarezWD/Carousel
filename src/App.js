import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './App.css';

function App() {
  
  const data = [
    {
      id: 1,
      title: 'NFT 1',
      price: '$100',
      category: 'NFT Category',
      linkImg: 'https://images.pexels.com/photos/13010671/pexels-photo-13010671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 2,
          title: 'NFT 2',
          price: '$150',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/10049163/pexels-photo-10049163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 3,
          title: 'NFT 3',
          price: '$200',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/5381500/pexels-photo-5381500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 4,
          title: 'NFT 4',
          price: '$250',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/5720783/pexels-photo-5720783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 5,
          title: 'NFT 5',
          price: '$300',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/12891215/pexels-photo-12891215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 6,
          title: 'NFT 6',
          price: '$350',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/4224255/pexels-photo-4224255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 7,
          title: 'NFT 7',
          price: '$400',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/11540260/pexels-photo-11540260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
          id: 8,
          title: 'NFT 8',
          price: '$450',
          category: 'NFT Category',
          linkImg: 'https://images.pexels.com/photos/12144473/pexels-photo-12144473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
  ]

  return (
    <Swiper 
    className='swiper-container'
    breakpoints={{
      // when window width is >= 320px
      320: {
        width: 320,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        width: 480,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1024: {
        width: 1024,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={20}
      // slidesPerView={4}
      slidesPerGroup= {1}
      navigation= {{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      // pagination={{ clickable: true }}
      loop={true}
      loopFillGroupWithBlank = {true}
      loopedSlidesLimit = {true}
      scrollbar={{ dragSize: 100, draggable: false, el: ".swiper-scrollbar" }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <div class="swiper-button-prev"></div>
      { data.map( user => (
        <SwiperSlide key={ user.id } className='slide'>
          <div className='slide-content'>
            <div className='user-image'>
              <img src={ user.linkImg } className='user-photo' alt='test NFT'/>
            </div>
            <div className='info'>
              <h2>{ user.title }</h2>
              <h4>{ user.price }</h4>
              <p className='user-testimonial'>" <i>{ user.category }</i> "</p>
            </div>
          </div>
        </SwiperSlide>
      )) }
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </Swiper>
  );
}

export default App;

