import useIsTouchScreen from "../../hooks/useIsTouch";
import ServiceCard from "./ServiceCard";
import s from "./Services.module.css";

export default function OurServices() {
  const { isTabletOrMobile } = useIsTouchScreen();
  return (
    <div
      className="p-4 my-8 rounded-2xl"
      style={{ backgroundColor: "#fafaff" }}
    >
      <div className="text-4xl font-bold text-blue-400 text-center">
        Our Services
      </div>
      <div className={s.servicesStyle}>
        <ServiceCard
          imageUrl="services/interiorpaint.jpg"
          serviceTitle="Interior Painting"
          serviceDesc="Paint the interior of your house"
          classes={s.gridArea1}
        />

        <ServiceCard
          imageUrl="services/exteriorpaint.jpg"
          serviceTitle="Exterior Painting"
          serviceDesc="Paint the exterior of your house"
          classes={s.gridArea2}
        />
        <ServiceCard
          imageUrl="services/custompaint.jpg"
          serviceTitle="Stucco Repair"
          serviceDesc="Paint the exterior of your house"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/bathroompaint.jpg"
          serviceTitle="Dry Wall Repair"
          serviceDesc="Paint the exterior of your house"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/wallpaperremoval.jpg"
          serviceTitle="Wall Paper Removal"
          serviceDesc="Paint the exterior of your house"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/pwashing.jpg"
          serviceTitle="Power Washing"
          serviceDesc="Paint the exterior of your house"
          classes={s.root}
        />
      </div>
    </div>
  );
}
