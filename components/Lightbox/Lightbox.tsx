import React from "react";
import ClientOnlyPortal from "../clientOnlyPortal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useLightboxContext } from "../../contexts/lightboxContext";
import Cross from "../common/icons/cross";

type Props = {
  children: React.ReactNode;
};

const Lightbox = ({ children }: Props) => {
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const { closeLightbox } = useLightboxContext();
  const handleKey = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return closeLightbox();
      }
    },
    [closeLightbox]
  );
  React.useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        window.addEventListener("keydown", handleKey);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      clearAllBodyScrollLocks();
    };
  }, [open, handleKey]);
  return (
    <ClientOnlyPortal selector="#modal">
      {/* <div ref={ref}>
        <div
          className="fixed top-0 bottom-0 left-0 right-0 flex items-center cursor-pointer"
          style={{ zIndex: 900, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => closeLightbox()}
        >
          <button
            onClick={() => closeLightbox()}
            aria-label="Close panel"
            className="text-white transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-6"
          >
            <Cross className="h-6 w-6" />
          </button>
          {children}
        </div>
      </div> */}

      <div className="fixed inset-0" style={{ zIndex: 900 }}>
        <div
          role="dialog"
          ref={ref}
          className="flex justify-center items-center pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-500 opacity-75 cursor-pointer"
              onClick={() => closeLightbox()}
            ></div>
          </div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-32 sm:align-middle sm:max-w-4xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Lightbox;
