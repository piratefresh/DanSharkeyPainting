import Head from "next/head";
import styles from "../styles/Home.module.css";
import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import Banner from "../components/Banner";
import PinIcon from "../components/common/icons/pin";
import EmailIcon from "../components/common/icons/email";
import PhoneIcon from "../components/common/icons/phone";
import ContactUs from "../components/ContactUs";
import ImageSlider from "../components/ImageSlider";
import ColorSamples from "../components/common/ColorSamples";
import OurServices from "../components/OurServices";
import Testimonals from "../components/Testimonals";
import Map from "../components/Map";
import Hero from "../components/Hero";
import FacebookChat from "../components/FacebookChat/FacebookChat";

const brushStyles = {
  backgroundImage: 'url("/painterbrushbg.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const bannerSlideBlock = [
  {
    id: "1",
    url:
      "https://images.unsplash.com/photo-1607825143539-cfa208347057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    url:
      "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: "3",
    url:
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    url:
      "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

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
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <PhoneIcon fillColor="#3B82F6" />
            <div className="sm:my-4">+1(610) 605-0473</div>
          </div>
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <EmailIcon fillColor="#3B82F6" />
            <div className="sm:my-4">sharkeypainting@gmail.com</div>
          </div>
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <PinIcon fillColor="#3B82F6" />
            <div className="sm:my-4">142 Fiesta Town</div>
          </div>
        </div>

        <ContactUs />
      </div>
      <ImageSlider bannerSlideBlock={bannerSlideBlock} />

      <OurServices />

      <Testimonals />

      {/* <ColorSamples color="red" /> */}

      <Map />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </PrimaryLayout>
  );
}
