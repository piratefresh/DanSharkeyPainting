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
          serviceDesc="With our expertise and experience, we will make your interior painting project as trouble free as possible."
          hrefUrl="/services/interiorpainting"
          classes={s.gridArea1}
        />

        <ServiceCard
          imageUrl="services/exteriorpaint.jpg"
          serviceTitle="Exterior Painting"
          serviceDesc="Let us take care of your exterior painting project. We know our ways around various exterior ammentities such as decks and fencing."
          hrefUrl="/services/exteriorpainting"
          classes={s.gridArea2}
        />
        <ServiceCard
          imageUrl="services/stuccorepair.png"
          serviceTitle="Stucco Repair"
          serviceDesc="The foundation of your house is important. We know how important your stucco is to your EIFS. We will use our knowledge to determine the best steps and materials for your home."
          hrefUrl="/services/stuccorepair"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/drywallrepair.png"
          serviceTitle="Drywall Repair"
          serviceDesc="We offer dry wall repairs. Any issues with your drywall will be expertely taken care off. We will ensure you the patching and painting will blend in perfectly."
          hrefUrl="/services/drywallrepair"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/wallpaperremoval.jpg"
          serviceTitle="Wall Paper Removal"
          serviceDesc="Don’t take a chance and damage your drywall, take advantage of our pro wallpaper removal service."
          hrefUrl="/services/wallpaperremoval"
          classes={s.root}
        />
        <ServiceCard
          imageUrl="services/pwashing.jpg"
          serviceTitle="Power Washing"
          serviceDesc="Mold, dirt and old paint can be very annoying. Our power wash service will take quick care of these woes."
          hrefUrl="/services/powerwashing"
          classes={s.root}
        />
      </div>
    </div>
  );
}
