import Link from "next/link";

import useIsTouchScreen from "../../hooks/useIsTouch";
import DropdownMenu from "../common/DropdownMenu";
import s from "./MobileNav.module.css";

export default function MobileNav() {
  const { isTablet } = useIsTouchScreen();
  return (
    <nav className="fixed bottom-0 z-50 bg-white flex w-full p-2">
      <ul className="flex flex-row justify-between w-full items-center mx-4">
        {isTablet ? (
          <>
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
          </>
        ) : (
          <DropdownMenu />
        )}
        <Link href="/">
          <a className="text-sm font-bold text-yellow-400 uppercase cursor-pointer flex flex-col">
            Dan Sharkey's Painting
          </a>
        </Link>
      </ul>
    </nav>
  );
}
