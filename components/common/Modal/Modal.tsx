import { FC, useRef, useEffect, useCallback } from "react";
import Portal from "@reach/portal";
import s from "./Modal.module.css";
import Cross from "../icons/cross";
import FocusTrap from "../../../utils/focus-trap";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface Props {
  className?: string;
  children?: any;
  open?: boolean;
  onClose: () => void;
  onEnter?: () => void | null;
}

const Modal: FC<Props> = ({ children, open, onClose, onEnter = null }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
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
    <Portal>
      {open ? (
        // <div className={s.root}>
        //   <div className={s.modal} role="dialog" ref={ref}>
        //     <button
        //       onClick={() => onClose()}
        //       aria-label="Close panel"
        //       className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-6"
        //     >
        //       <Cross className="h-6 w-6" />
        //     </button>
        //     <FocusTrap focusFirst>{children}</FocusTrap>
        //   </div>
        // </div>

        <div className="fixed inset-0" style={{ zIndex: 900 }}>
          <div
            role="dialog"
            ref={ref}
            className="flex justify-center items-center pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-gray-500 opacity-75 cursor-pointer"
                onClick={() => onClose()}
              ></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-32 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Portal>
  );
};

export default Modal;
