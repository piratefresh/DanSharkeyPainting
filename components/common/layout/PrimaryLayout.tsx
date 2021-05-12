import useDetectDevice from "../../../hooks/useDetectDevice";
import useIsTouchScreen from "../../../hooks/useIsTouch";
import MobileNav from "../../MobileNav";
import DropdownMenu from "../DropdownMenu";
import Navbar from "../Navbar/Navbar";
import s from "./PrimaryLayout.module.css";
import Footer from "../../Footer";

type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;
  noCenter?: boolean;
};

const SecondaryStyles = {
  backgroundColor: "#fdf8f4",
};

const PrimaryLayout = ({
  fullWidth = false,
  noCenter = false,
  children,
}: Props) => {
  const { isTabletOrMobile, isDesktopOrLaptop } = useIsTouchScreen();

  return (
    <div style={SecondaryStyles}>
      <div className={`${s.root} ${noCenter ? "" : "mx-auto"}`}>
        {isDesktopOrLaptop ? <Navbar /> : null}
        <main className="fit">{children}</main>
        <Footer />
      </div>
      {isTabletOrMobile ? <MobileNav /> : null}
    </div>
  );
};

export default PrimaryLayout;
