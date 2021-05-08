import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import TestimonalCard from "../components/Testimonals/TestimonalCard";
import Masonry from "react-masonry-css";
import styles from "../styles/Testimonals.module.css";
import Header from "../components/common/Header";

export default function Testimonals() {
  return (
    <PrimaryLayout>
      <Header title="Testimonals" subtitle="Our Reviews" />

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <TestimonalCard>
          <div>"It’s not about ideas. It’s about making ideas happen."</div>
          <div className="flex flex-col font-bold text-lg">John Doe</div>
        </TestimonalCard>
        <TestimonalCard>
          <div>
            "Easily coordinated, great work. We’d put painting a couple of rooms
            ‘until’ we had extra time on our hands. That never materialized. So
            glad I did. 2 rooms done in 6 hours, looks great! Will definitely
            use the service again."
          </div>
          <div className="flex flex-col font-bold text-lg">John Doe</div>
        </TestimonalCard>
        <TestimonalCard>
          <div>
            "I had the best experience with Paintzen. They were easy to
            communicate with during the quote process. I had two small projects
            to hang wallpaper on accent walls in two separate rooms and they
            gave us a fair quote. They were timely and did a stellar job! I was
            worried about the installation because the wallpaper prints I chose
            had complicated patterns, but their attention to detail and making
            sure the patterns lined up was excellent, it looks seamless! "
          </div>
          <div className="flex flex-col font-bold text-lg">John Doe</div>
        </TestimonalCard>
        <TestimonalCard>
          <div>"It’s not about ideas. It’s about making ideas happen."</div>
          <div className="flex flex-col font-bold text-lg">John Doe</div>
        </TestimonalCard>
        <TestimonalCard>
          <div>
            "Easily coordinated, great work. We’d put painting a couple of rooms
            ‘until’ we had extra time on our hands. That never materialized. So
            glad I did. 2 rooms done in 6 hours, looks great! Will definitely
            use the service again."
          </div>
          <div className="flex flex-col font-bold text-lg">John Doe</div>
        </TestimonalCard>
        <TestimonalCard>
          <div>
            "I had the best experience with Paintzen. They were easy to
            communicate with during the quote process. I had two small projects
            to hang wallpaper on accent walls in two separate rooms and they
            gave us a fair quote. They were timely and did a stellar job! I was
            worried about the installation because the wallpaper prints I chose
            had complicated patterns, but their attention to detail and making
            sure the patterns lined up was excellent, it looks seamless! "
          </div>
          <div className="flex flex-col font-bold text-lg">John Doe</div>
        </TestimonalCard>
      </Masonry>
    </PrimaryLayout>
  );
}
