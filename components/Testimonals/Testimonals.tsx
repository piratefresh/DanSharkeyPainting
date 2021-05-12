import useIsTouchScreen from "../../hooks/useIsTouch";
import TestimonalCard from "./TestimonalCard";
import Masonry from "react-masonry-css";
import s from "./Testimonals.module.css";
import { testimonals } from "./TestimonalData";

export default function Testimonals() {
  const { isDesktopOrLaptop } = useIsTouchScreen();
  console.log("testimonals: ", testimonals);
  return (
    <div
      className="p-4 my-8 rounded-2xl"
      style={{ backgroundColor: "#f8f4f2" }}
    >
      <div className="my-8 flex flex-col items-center">
        <div className="text-4xl font-bold text-blue-400">Testimonals</div>
        <p className="">Our Reviews</p>
      </div>

      {isDesktopOrLaptop ? (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {testimonals.map((testimonal, index: number) => {
            return (
              <TestimonalCard key={index}>
                <div className={s.testimonalText}>
                  <span className="font-bold text-sm md:text-2xl">"</span>
                  {testimonal.review} {index}
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

      <div className="flex">
        <button className="bg-blue-500 rounded-xl p-2 text-white mt-8 text-lg mx-auto">
          <a href="/testimonals">Read more..</a>
        </button>
      </div>
    </div>
  );
}
