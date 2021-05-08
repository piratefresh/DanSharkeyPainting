import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import useDetectDevice from "../../hooks/useDetectDevice";
import { useLightboxContext } from "../../contexts/lightboxContext";
import Lightbox from "../Lightbox";

interface IImage {
  url: string;
  title?: string;
  description?: string;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ImageSlider = ({ bannerSlideBlock }: any) => {
  const device = useDetectDevice();
  const {
    isOpenLightbox,
    openLightbox,
    updateImage,
    image,
  } = useLightboxContext();
  const handleOnClick = (image: IImage) => {
    updateImage({
      url: image.url,
    });
    openLightbox();
  };

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        centeredSlides
        loop
        autoplay={{ delay: 30000 }}
      >
        {bannerSlideBlock.map((item: any, index: number) => (
          <SwiperSlide key={item.id}>
            <img
              onClick={() => handleOnClick(item)}
              src={item.url}
              alt=""
              className="object-cover rounded-md"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpenLightbox ? (
        <Lightbox>
          <img src={image.url} alt="" />
        </Lightbox>
      ) : null}
    </>
  );
};

export default ImageSlider;
