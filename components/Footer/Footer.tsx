import styles from "../../styles/Home.module.css";
import EmailIcon from "../common/icons/email";
import FacebookIcon from "../common/icons/facebookIcon";
import PhoneIcon from "../common/icons/phone";

export default function Footer() {
  return (
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
        <div className="flex flex-row">
          <a
            href="https://www.facebook.com/DanSharkeysPainting"
            className="bg-blue-600 w-12 h-12 items-center justify-center flex rounded-lg mx-2"
          >
            <FacebookIcon />
          </a>
          <a
            href="tel:+16106050473"
            className="bg-blue-600 w-12 h-12 items-center justify-center flex rounded-lg mx-2"
          >
            <PhoneIcon fillColor="#fff" classes="h-5 w-5" />
          </a>
          <a
            href="mailto:sharkeypainting@gmail.com"
            className="bg-blue-600 w-12 h-12 items-center justify-center flex rounded-lg mx-2"
          >
            <EmailIcon fillColor="#fff" classes="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
