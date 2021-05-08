import useDetectDevice from "../../hooks/useDetectDevice";
import TestimonalCard from "./TestimonalCard";

const testimonalsStyle = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridColumnGap: "30px",
  gridRowGap: "16px",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",
};

const testimonalsMobileStyle = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridColumnGap: "30px",
  gridRowGap: "16px",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto",
};

export default function Testimonals() {
  const device = useDetectDevice();
  return (
    <div
      className="p-4 my-8 rounded-2xl"
      style={{ backgroundColor: "#f8f4f2" }}
    >
      <div className="my-8 flex flex-col items-center">
        <div className="text-4xl font-bold text-blue-400">Testimonals</div>
        <p className="">Our Reviews</p>
      </div>
      <div
        style={
          device.isMobile || device.isTablet
            ? testimonalsMobileStyle
            : testimonalsStyle
        }
      >
        <TestimonalCard>
          <div className="flex flex-col">John Doe</div>
          <div>"It’s not about ideas. It’s about making ideas happen."</div>
        </TestimonalCard>
        <TestimonalCard>
          <div className="flex flex-col">John Doe</div>
          <div>
            "Easily coordinated, great work. We’d put painting a couple of rooms
            ‘until’ we had extra time on our hands. That never materialized. So
            glad I did. 2 rooms done in 6 hours, looks great! Will definitely
            use the service again."
          </div>
        </TestimonalCard>
        <TestimonalCard>
          <div className="flex flex-col">John Doe</div>
          <div>
            "I had the best experience with Paintzen. They were easy to
            communicate with during the quote process. I had two small projects
            to hang wallpaper on accent walls in two separate rooms and they
            gave us a fair quote. They were timely and did a stellar job! I was
            worried about the installation because the wallpaper prints I chose
            had complicated patterns, but their attention to detail and making
            sure the patterns lined up was excellent, it looks seamless! "
          </div>
        </TestimonalCard>
      </div>
      <div className="flex">
        <button className="bg-blue-500 rounded-xl p-2 text-white mt-8 text-lg mx-auto">
          <a href="/testimonals">Read more..</a>
        </button>
      </div>
    </div>
  );
}
