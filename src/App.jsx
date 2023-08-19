
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slider1 from '../public/01.jpg';
import slider2 from '../public/02.jpg';
import slider3 from '../public/03.png';
import slider4 from '../public/04.jpg';
import slider5 from '../public/05.png';

function App() {
  const slideNames = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    const slideName = slideNames[currentIndex];
    alert(`This is ${slideName}`);
  };

  return (
    <>
      <div className='w-1/2 mt-40 mx-auto'>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper" onSlideChange={handleSlideChange}>
            <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;
