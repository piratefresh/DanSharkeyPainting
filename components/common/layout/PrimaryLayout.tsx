import useDetectDevice from "../../../hooks/useDetectDevice";
import useIsTouchScreen from "../../../hooks/useIsTouch";
import MobileNav from "../../MobileNav";
import DropdownMenu from "../DropdownMenu";
import Navbar from "../Navbar/Navbar";
import s from "./PrimaryLayout.module.css";

type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;
  noCenter?: boolean;
};

const PrimaryStyles = {
  backgroundImage: 'url("/backgroundPainter1.jpg")',
  backgroundRepeat: "no-repeat",
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
      {isDesktopOrLaptop ? <Navbar /> : null}
      <div className={`${s.root} ${noCenter ? "" : "mx-auto"}`}>{children}</div>
      {isTabletOrMobile ? <MobileNav /> : null}
    </div>
  );
};

export default PrimaryLayout;
