import useDetectDevice from "../../../hooks/useDetectDevice";
import useIsTouchScreen from "../../../hooks/useIsTouch";
import MobileNav from "../../MobileNav";
import DropdownMenu from "../DropdownMenu";
import Navbar from "../Navbar/Navbar";

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
  const { isTabletOrMobile } = useIsTouchScreen();

  return (
    <div style={SecondaryStyles}>
      {isTabletOrMobile ? <MobileNav /> : null}
      <div
        className={`${noCenter ? "" : "mx-auto"} ${
          isTabletOrMobile ? "p-4" : "w-2/3"
        }`}
      >
        {isTabletOrMobile ? null : <Navbar />}
        {children}
      </div>
    </div>
  );
};

export default PrimaryLayout;
