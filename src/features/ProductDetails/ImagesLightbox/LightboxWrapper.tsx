import React from "react";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImagesLightbox from "../ImagesLightbox";

export const LightboxWrapper = ({
  images,
  currentIndex,
  setCurrentIndex,
}: {
  images: string[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const lightboxSlides = images?.map((imageUrl) => {
    return {
      src: imageUrl,
      width: 1920,
      height: 1080,
    };
  });

  return (
    <Lightbox
      open={currentIndex >= 0}
      index={currentIndex}
      close={() => setCurrentIndex(-1)}
      slides={lightboxSlides}
      //@ts-ignore
      render={{ slide: ImagesLightbox, thumbnail: ImagesLightbox }}
      plugins={[Thumbnails]}
    />
  );
};

export default LightboxWrapper;
