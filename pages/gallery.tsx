import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import Header from "../components/common/Header";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function Gallery() {
  return (
    <>
      <div className="h-full mx-auto" style={{ width: "960px" }}>
        <Header title="Gallery" subtitle="Our Previous Projects" />
        <div className="flex flex-col">
          <div
            className="flex flex-col items-center bg-white rounded-xl"
            style={{ width: "40%;" }}
          >
            <div
              className="relative"
              style={{
                width: "100%",
                height: "200px",
              }}
            >
              <Image
                layout="fill"
                // width={700}
                // height={400}
                className="flex items-center object-cover rounded-t-xl"
                src="/gallery1.jpg"
                alt=""
              />
            </div>
            <p className="text-lg mt-8">Chestnut St, 19144, Philadelphia PA</p>
            <p className="text-lg my-2">Exterior Painting Job</p>
          </div>

          <div
            className="flex flex-col items-center bg-white rounded-xl my-8"
            style={{ width: "40%;" }}
          >
            <div
              className="relative"
              style={{
                width: "100%",
                height: "200px",
              }}
            >
              <Image
                layout="fill"
                // width={700}
                // height={400}
                className="flex items-center object-cover rounded-t-xl"
                src="/gallery1.jpg"
                alt=""
              />
            </div>
            <p className="text-lg mt-8">Chestnut St, 19144, Philadelphia PA</p>
            <p className="text-lg my-2">Exterior Painting Job</p>
          </div>

          <div
            className="flex flex-col items-center bg-white rounded-xl my-8"
            style={{ width: "40%;" }}
          >
            <div
              className="relative"
              style={{
                width: "100%",
                height: "200px",
              }}
            >
              <Image
                layout="fill"
                // width={700}
                // height={400}
                className="flex items-center object-cover rounded-t-xl"
                src="/gallery1.jpg"
                alt=""
              />
            </div>
            <p className="text-lg mt-8">Chestnut St, 19144, Philadelphia PA</p>
            <p className="text-lg my-2">Exterior Painting Job</p>
          </div>
        </div>
      </div>
    </>
  );
}
