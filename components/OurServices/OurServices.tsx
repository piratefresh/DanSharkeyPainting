import useIsTouchScreen from "../../hooks/useIsTouch";
import ServiceCard from "./ServiceCard";
import s from "./Services.module.css";

interface IProps {
  noTitle?: boolean;
}

export default function OurServices({ noTitle }: IProps) {
  const { isTabletOrMobile } = useIsTouchScreen();
  return (
    <div
      className="p-4 my-8 rounded-2xl"
      style={{ backgroundColor: "#fafaff" }}
    >
      {!noTitle ? (
        <div className="text-4xl font-bold text-blue-400 text-center">
          Our Services
        </div>
      ) : null}

      <div className={s.servicesStyle}>
        <ServiceCard
          imageUrl="services/interiorpaint.jpg"
          serviceTitle="Interior Painting"
          serviceDesc="Paint the interior of your house"
          hrefUrl="/services/interiorpainting"
          classes={s.gridArea1}
        />

        <ServiceCard
          imageUrl="services/exteriorpaint.jpg"
          serviceTitle="Exterior Painting"
          serviceDesc="Paint the exterior of your house"
          hrefUrl="/services/exteriorpainting"
          classes={s.gridArea2}
        />
        <ServiceCard
          imageUrl="services/custompaint.jpg"
          serviceTitle="Stucco Repair"
          serviceDesc="Paint the exterior of your house"
          hrefUrl="/services/stuccorepair"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/bathroompaint.jpg"
          serviceTitle="Dry Wall Repair"
          serviceDesc="Paint the exterior of your house"
          hrefUrl="/services/drywallrepair"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/wallpaperremoval.jpg"
          serviceTitle="Wall Paper Removal"
          serviceDesc="Paint the exterior of your house"
          hrefUrl="/services/wallpaperremoval"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/pwashing.jpg"
          serviceTitle="Power Washing"
          serviceDesc="Paint the exterior of your house"
          hrefUrl="/services/powerwashing"
          classes={s.root}
        />
      </div>
    </div>
  );
}
