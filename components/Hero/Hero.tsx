import Image from "next/image";
import useIsTouchScreen from "../../hooks/useIsTouch";

const painterTextStyle = {
  backgroundImage:
    'url("https://assets.website-files.com/60587b5d9eb79a8cf5ba521a/6059da8996c524ca57f07d47_scribbble.png")',
  backgroundPosition: "50% 100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  marginRight: "5px",
  color: "#ff4f11",
};

export default function Hero() {
  const { isTabletOrMobile } = useIsTouchScreen();
  return (
    <div
      className="flex flex-col items-center md:grid md:grid-cols-2 sm:my-8 rounded-2xl"
      style={{ height: "500px", backgroundColor: "#f8f4f2" }}
    >
      <div className="my-auto ml-8">
        <h1 className="text-6xl">Dan Sharkey's Painting</h1>
        <p className="text-4xl">
          <span style={painterTextStyle}>Painters</span>
          for your housing projects
        </p>
      </div>
      {/* {device.isTablet ? (
        <img
          className="flex items-center h-full object-cover"
          style={{ width: "1000px" }}
          src="/painterbrushbg.png"
        />
      ) : (
        <img
          className="flex items-center object-contain"
          src="/houseBanner.png"
          alt=""
        />
      )} */}
      <Image
        width={500}
        height={500}
        className="flex items-center object-contain"
        src="https://res.cloudinary.com/film-it/image/upload/v1620606048/Dan%20Sharkey%20Painting/houseBanner.png"
        alt=""
      />
    </div>
  );
}
