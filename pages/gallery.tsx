import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import Header from "../components/common/Header";

export default function Gallery() {
  return (
    <PrimaryLayout>
      <div className="h-screen">
        <Header title="Gallery" subtitle="Our Previous Projects" />
        <div className="grid grid-cols-4 gap-4">
          <div
            className="flex items-center bg-white p-8"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="" src="/gallery1.jpg" alt="" />
          </div>
          <div
            className="flex items-center bg-white p-8"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="" src="/gallery1.jpg" alt="" />
          </div>
          <div
            className="flex items-center bg-white p-8"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="" src="/gallery1.jpg" alt="" />
          </div>
          <div
            className="flex items-center bg-white p-8"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="" src="/gallery1.jpg" alt="" />
          </div>
          <div
            className="flex items-center bg-white p-8"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="" src="/gallery1.jpg" alt="" />
          </div>
          <div
            className="flex items-center bg-white p-8"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="" src="/gallery1.jpg" alt="" />
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
}
