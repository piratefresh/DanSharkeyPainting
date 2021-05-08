type Props = {
  color: string;
};

function ColorSamples({ color }: Props) {
  return (
    <div
      className="relative col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full row-start-1 row-span-full xl:col-start-1 xl:col-end-5 xl:row-start-2 xl:row-end-5 lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0"
      style={{ height: "500px" }}
    >
      <div className="bg-gray-100 w-full flex-none rounded-3xl"></div>
      <div className="absolute top-0 left-0 z-10 h-full w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-light-blue-500 -rotate-1 sm:-rotate-2"></div>
    </div>
  );
}

export default ColorSamples;
