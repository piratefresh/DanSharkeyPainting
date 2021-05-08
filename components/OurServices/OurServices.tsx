import useDetectDevice from "../../hooks/useDetectDevice";
import useIsTouchScreen from "../../hooks/useIsTouch";
import ServiceCard from "./ServiceCard";
import s from "./Services.module.css";

const servicesStyle = {
  display: "grid",
  width: "100%",
  marginTop: "20px",
  gridColumnGap: "30px",
  gridRowGap: "30px",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "auto",
  gridAreaTemplate: '". . . ." "one one two two"',
};

const servicesMobileStyle = {
  display: "grid",
  width: "100%",
  marginTop: "20px",
  gridColumnGap: "30px",
  gridRowGap: "30px",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto",
};

export default function OurServices() {
  const { isTabletOrMobile } = useIsTouchScreen();
  return (
    <div
      className="py-4 my-8 rounded-2xl"
      style={{ backgroundColor: "#fafaff" }}
    >
      <div className="text-4xl font-bold text-blue-400 text-center">
        Our Services
      </div>
      <div
        className={isTabletOrMobile ? s.servicesMobileStyle : s.servicesStyle}
      >
        <ServiceCard
          imageUrl="/interiorpaint.jpg"
          serviceTitle="Interior Painting"
          serviceDesc="Paint the interior of your house"
          classes="relative bg-white rounded-2xl flex flex-col"
        />

        <ServiceCard
          imageUrl="/exteriorpaint.jpg"
          serviceTitle="Exterior Painting"
          serviceDesc="Paint the exterior of your house"
          classes="relative bg-white rounded-2xl flex flex-col"
        />
        <ServiceCard
          imageUrl="/custompaint.jpg"
          serviceTitle="Stucco Repair"
          serviceDesc="Paint the exterior of your house"
          classes="relative bg-white rounded-2xl flex flex-col"
        />
        <ServiceCard
          imageUrl="/bathroompaint.jpg"
          serviceTitle="Dry Wall Repair"
          serviceDesc="Paint the exterior of your house"
          classes="relative bg-white rounded-2xl flex flex-col"
        />
        <ServiceCard
          imageUrl="/bathroompaint.jpg"
          serviceTitle="Wall Paper Removal"
          serviceDesc="Paint the exterior of your house"
          classes={`relative bg-white rounded-2xl flex flex-col ${
            isTabletOrMobile ? null : s.gridArea1
          }`}
        />
        <ServiceCard
          imageUrl="/bathroompaint.jpg"
          serviceTitle="Power Washing"
          serviceDesc="Paint the exterior of your house"
          classes={`relative bg-white rounded-2xl flex flex-col ${
            isTabletOrMobile ? null : s.gridArea2
          }`}
        />
      </div>
    </div>
  );
}
