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
import { useLightboxContext } from "../../contexts/lightboxContext";
import Lightbox from "../Lightbox";
import Image from "next/image";
import s from "./imageSlider.module.css";
import useIsTouchScreen from "../../hooks/useIsTouch";

interface IImage {
  url: string;
  title?: string;
  description?: string;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const bannerSlideBlock = [
  {
    id: "1",
    url:
      "https://res.cloudinary.com/film-it/image/upload/v1620604730/Dan%20Sharkey%20Painting/philadelphia_home-960w.jpg",
  },
  {
    id: "2",
    url:
      "https://res.cloudinary.com/film-it/image/upload/v1620604730/Dan%20Sharkey%20Painting/pexels-photo-206172.webp",
  },
  {
    id: "3",
    url:
      "https://res.cloudinary.com/film-it/image/upload/v1620604730/Dan%20Sharkey%20Painting/pexels-photo-221540.jpg",
  },
  {
    id: "4",
    url:
      "https://res.cloudinary.com/film-it/image/upload/v1620604730/Dan%20Sharkey%20Painting/photo-1597218868981-1b68e15f0065.webp",
  },
  {
    id: "5",
    url:
      "https://res.cloudinary.com/film-it/image/upload/v1620604584/Dan%20Sharkey%20Painting/interiorpaint.jpg",
  },
];

const ImageSlider = () => {
  const { isTabletOrMobile } = useIsTouchScreen();
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
    <div className={s.root}>
      <Swiper
        slidesPerView={isTabletOrMobile ? 1 : 2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        centeredSlides
        loop
        autoplay={{ delay: 30000 }}
      >
        {bannerSlideBlock.map((item: any, index: number) => (
          <SwiperSlide key={item.id}>
            <Image
              onClick={() => handleOnClick(item)}
              src={item.url}
              className={`"object-cover rounded-md ${s.imageStyle}"`}
              layout="responsive"
              width={800}
              height={600}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpenLightbox ? (
        <Lightbox>
          <Image width={700} height={475} src={image.url} alt="" />
        </Lightbox>
      ) : null}
    </div>
  );
};

export default ImageSlider;
