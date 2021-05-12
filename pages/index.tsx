import Head from "next/head";
import styles from "../styles/Home.module.css";
import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import PinIcon from "../components/common/icons/pin";
import EmailIcon from "../components/common/icons/email";
import PhoneIcon from "../components/common/icons/phone";
import ContactUs from "../components/ContactUs";
import ImageSlider from "../components/ImageSlider";
import OurServices from "../components/OurServices";
import Testimonals from "../components/Testimonals";
import Map from "../components/Map";
import Hero from "../components/Hero";
import Header from "../components/common/Header";
import FacebookIcon from "../components/common/icons/facebookIcon";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}; // our location object from earlier

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <Banner bannerText="Interior Painting in Darby" /> */}
      <div
        className="my-8 p-4 rounded-2xl"
        style={{ backgroundColor: "rgba(255, 101, 1, 0.12)" }}
      >
        <Header title="Contact Us" subtitle="Our Contact Information" />
        <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <PhoneIcon fillColor="#3B82F6" />
            <div className="md:my-4">
              <a href="tel:+16106050473">+1(610)605-0473</a>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <EmailIcon fillColor="#3B82F6" />
            <div className="my-1 md:my-4">
              <a href="mailto:sharkeypainting@gmail.com"></a>
              sharkeypainting@gmail.com
            </div>
          </div>
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <PinIcon fillColor="#3B82F6" />
            <div className="my-1 md:my-4">
              142 Fiesta Town, Delaware County, PA
            </div>
          </div>
        </div>

        <ContactUs />
      </div>
      <ImageSlider />

      <OurServices />

      <Testimonals />

      {/* <ColorSamples color="red" /> */}

      <Map />
    </>
  );
}
