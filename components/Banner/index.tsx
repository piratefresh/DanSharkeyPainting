import CallToAction from "../CallToAction";

type Props = {
  bannerText?: string;
  bannerSubtitle?: string;
};

function Banner({ bannerText, bannerSubtitle }: Props) {
  return (
    <div className="relative w-full my-8">
      <img
        className="w-full object-cover rounded-md"
        src="/banner1.jpg"
        alt="Banner"
        style={{ height: "300px" }}
      />
      <div className="absolute top-0 bg-blue-400 bg-opacity-40 h-full w-full"></div>
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <div className="flex flex-col items-start items-center">
          {bannerText ? (
            <div className="text-4xl text-white font-bold my-4">
              {bannerText}
            </div>
          ) : null}

          {bannerSubtitle ? bannerSubtitle : null}

          <CallToAction text="Get Free Quote" linkHref="/" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
