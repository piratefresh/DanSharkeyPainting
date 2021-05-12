import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import TestimonalCard from "../components/Testimonals/TestimonalCard";
import Masonry from "react-masonry-css";
import Header from "../components/common/Header";
import useIsTouchScreen from "../hooks/useIsTouch";
import { testimonals } from "../components/Testimonals/TestimonalData";
import s from "../components/Testimonals/Testimonals.module.css";

export default function Testimonals() {
  const { isDesktopOrLaptop } = useIsTouchScreen();
  return (
    <>
      <Header title="Testimonals" subtitle="Our Reviews" />

      {isDesktopOrLaptop ? (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {testimonals.map((testimonal, index: number) => {
            return (
              <TestimonalCard>
                <div className={s.testimonalText}>
                  <span className="font-bold text-sm md:text-2xl">"</span>
                  {testimonal.review}
                  <span className="font-bold text-sm md:text-2xl">"</span>
                </div>
                <div className="flex flex-col font-semibold">
                  {testimonal.name}
                </div>
              </TestimonalCard>
            );
          })}
        </Masonry>
      ) : (
        <div className="flex flex-col">
          {testimonals.map((testimonal, index: number) => {
            return (
              <div className="my-4" key={index}>
                <TestimonalCard key={index}>
                  <div className={s.testimonalText}>
                    <span className="font-bold text-sm md:text-2xl">"</span>
                    {testimonal.review}
                    <span className="font-bold text-sm md:text-2xl">"</span>
                  </div>
                  <div className="flex flex-col font-semibold">
                    {testimonal.name}
                  </div>
                </TestimonalCard>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
