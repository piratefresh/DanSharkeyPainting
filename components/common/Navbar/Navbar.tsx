import React from "react";
import Link from "next/link";
import s from "./Navbar.module.css";
import { useDebounce } from "use-debounce";
import { useLightboxContext } from "../../../contexts/lightboxContext";
import ClientOnlyPortal from "../../clientOnlyPortal";
import Cross from "../icons/cross";
import ContactUs from "../../ContactUs";
import { useUI } from "../../../contexts/uiContext";
import Modal from "../Modal";

const navStyles = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  gridColumnGap: "10px",
  gridRowGap: "10px",
};

const stickyStyles = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  gridColumnGap: "10px",
  gridRowGap: "10px",
  position: "fixed",
  zIndex: "50",
  backgroundColor: "#fdf8f4",
};

function Navbar() {
  const [isSticky, setSticky] = React.useState(false);
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const { displayModal, openModal, closeModal, modalView } = useUI();

  const handleScroll = () => {
    window.scrollY > 140 ? setSticky(true) : setSticky(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="relative flex w-full">
        <nav className="w-full" style={!isSticky ? navStyles : stickyStyles}>
          <Link href="/">
            <a className="text-2xl font-bold text-yellow-400 uppercase cursor-pointer flex flex-col">
              <img
                className="w-24 h-24"
                src="/logo.png"
                alt="Dan Sharkey's Painting"
              />
            </a>
          </Link>
          <div>
            <Link href="/">
              <a className={s.link}>Home</a>
            </Link>
            <Link href="/services">
              <a className={s.link}>Services</a>
            </Link>
            <Link href="/about">
              <a className={s.link}>About</a>
            </Link>
            <Link href="/gallery">
              <a className={s.link}>Gallery</a>
            </Link>
            <Link href="/testimonals">
              <a className={s.link}>Testimonals</a>
            </Link>
          </div>

          <div
            className="inline-flex items-center justify-center bg-blue-400 rounded-md h-12 ml-auto cursor-pointer"
            style={{ width: "130px" }}
          >
            <a
              className="font-bold text-white px-3 py-1 rounded-md"
              onClick={() => openModal()}
            >
              Free Quote
            </a>
          </div>
        </nav>
      </div>
      <Modal open={displayModal} onClose={closeModal}>
        <div
          className="flex mx-auto my-8 p-4 rounded-2xl"
          style={{ backgroundColor: "rgb(250, 250, 255)" }}
        >
          <ContactUs />
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
