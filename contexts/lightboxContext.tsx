import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type Context = {
  isOpenLightbox: boolean;
  openLightbox: () => void;
  closeLightbox: () => void;
  image: IImage;
  updateImage: (image: IImage) => void;
};

interface IImage {
  url: string;
  title?: string;
  description?: string;
}

// Just find-replace "XContext" with whatever context name you like. (ie. DankContext)
const LightboxContext = createContext<Context | null>(null);

export const LightboxContextProvider = ({ children }: Props) => {
  const [image, setImage] = useState<IImage>();
  const [isOpenLightbox, setOpenLightbox] = useState(false);

  const openLightbox = () => {
    setOpenLightbox(true);
  };

  const closeLightbox = () => {
    setOpenLightbox(false);
  };

  const updateImage = (image: IImage) => {
    setImage(image);
  };

  return (
    <LightboxContext.Provider
      value={{
        updateImage,
        isOpenLightbox,
        openLightbox,
        closeLightbox,
        image,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightboxContext = () => {
  const context = useContext(LightboxContext);

  if (!context)
    throw new Error(
      "LightboxContext must be called from within the LightboxContextProvider"
    );

  return context;
};
