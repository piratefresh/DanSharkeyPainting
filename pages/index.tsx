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
    <PrimaryLayout>
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
            <div className="md:my-4">+1(610) 605-0473</div>
          </div>
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <EmailIcon fillColor="#3B82F6" />
            <div className="my-1 md:my-4">sharkeypainting@gmail.com</div>
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

      <footer className={styles.footer}>
        <div>
          <h2 className="font-semibold text-2xl mb-4">
            <a>Dan's Sharkey Painting</a>
          </h2>
          <p>
            At the Start...Consider the Finish! Experienced Professionals of
            Interior and Exterior Painting, Power Washing and Stucco Repairs for
            Commercial and Residential Properties.
          </p>
        </div>
        <div></div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
          <div className="flex flex-col">
            <div className="my-2">+1(610) 605-0473</div>

            <div className="my-2">sharkeypainting@gmail.com</div>

            <div className="my-2">142 Fiesta Town, Delaware County, PA</div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Socials</h2>
          <div>
            <a
              href="https://www.facebook.com/DanSharkeysPainting"
              className="bg-blue-600 w-12 h-12 items-center justify-center flex rounded-lg"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </footer>
    </PrimaryLayout>
  );
}
