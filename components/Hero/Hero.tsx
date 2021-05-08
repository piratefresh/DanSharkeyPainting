import useDetectDevice from "../../hooks/useDetectDevice";

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
  const device = useDetectDevice();
  return (
    <div
      className="flex flex-col md:grid items-center md:grid-cols-2 sm:my-8 rounded-2xl"
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
      <img
        className="flex items-center object-contain"
        src="/houseBanner.png"
        alt=""
      />
    </div>
  );
}
