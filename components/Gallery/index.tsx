import React from "react";

type GalleryProps = {
  images: any[];
  onClick: (image: any) => void;
};

const Gallery: React.FC<GalleryProps> = ({ images, onClick }) => {
  return (
    <div className="gallery w-full md:w-3/5 mx-auto mt-20 py-6 grid grid-cols-5 gap-4">
      {images.map((image: any) => (
        <img
          key={image.sourceUrl}
          src={image.sourceUrl}
          className="w-full h-full object-cover"
          onClick={() => onClick(image)}
        />
      ))}
    </div>
  );
};

export default Gallery;