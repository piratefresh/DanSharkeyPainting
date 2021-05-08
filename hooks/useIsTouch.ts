import { useMediaQuery } from "react-responsive";

export default function useIsTouchScreen() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return {
    isTabletOrMobile,
  };
}
