import { useMediaQuery } from "react-responsive";

export default function useIsTouchScreen() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1224px)" });

  return {
    isTabletOrMobile,
  };
}
