/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Mousewheel,Pagination,EffectCoverflow} from "swiper/modules";
import { Link } from "react-router-dom";
import {CaretRight} from '@phosphor-icons/react' 
export default function Slider({slideItems,title,path,id}) {
  return (
    <>
      <div className=" flex bg-[#090909] justify-center w-full items-center text-2xl font-extralight italic p-2 text-orange-600 lg:text-3xl hover:font-bold duration-150"><Link to={path} className="hover:text-orange-600 flex duration-150">{title}  <CaretRight className="pl-3" size={34} /></Link></div>
      { id==="1" && <Swiper
      direction={'horizontal'}
      snapToSlides={true}
      scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
          renderProgressbar: true,
          dynamicBullets: true,
        }}
        mousewheel={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1362: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Mousewheel,Pagination]}
        className="md:h-[40dvh] h-[60dvh] w-full bg-[#090909]"
      >
        {slideItems.map((item) => (
          <SwiperSlide className="h-full w-full rounded-md" key={item.id}>
            <div className=" bg-[#101010] h-full w-full flex flex-col justify-center items-center text-white">
              <Link className="font-extrabold md:text-2xl text-xl text-center pb-14 hover:text-orange-600 duration-150">
                {item.title}
              </Link>
              <div className="flex pl-2">
                <div className="overflow-hidden rounded-lg w-[60%]">
                  <img
                    src={item.imageurl}
                    className="h-[25dvh]  w-[100%] object-cover rounded-lg scale-125 hover:scale-150 duration-150"
                    alt=""
                  />
                </div>
                <div className="h-[90%] w-[45%] flex flex-col justify-center items-center bg-transparent pr-1 overflow-hidden">
                  <span className="text-start text-xs sm:text-sm  pl-10">{item.description}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>}
      { id==="2" &&
      <Swiper
      className="md:h-[40dvh] h-[60dvh] w-full bg-[#090909]"
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1362: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
                 { slideItems.map((item) => (
          <SwiperSlide className="h-full rounded-md" key={item.id}>
            <div className=" bg-[#212121] h-full w-full flex flex-col justify-center items-center text-white">
              <Link className="font-extrabold md:text-2xl text-xl text-center pb-14 hover:text-orange-600 duration-150">
                {item.title}
              </Link>
              <div className="flex pl-2">
                <div className="overflow-hidden rounded-lg w-[60%]">
                  <img
                    src={item.imageurl}
                    className="h-[25dvh]  w-[100%] object-cover rounded-lg scale-125 hover:scale-150 duration-150"
                    alt=""
                  />
                </div>
                <div className="h-[90%] w-[45%] flex flex-col justify-center items-center bg-transparent pr-1 overflow-hidden">
                  <span className="text-start text-xs sm:text-sm  pl-10">{item.description}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      }
    </>
  );
}
