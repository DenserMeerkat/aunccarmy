import React from "react";
import { SelectGalleryImage } from "@/db/schema";
import CldImage from "../common/cld-image";
import { AspectRatio } from "../ui/aspect-ratio";

const ImageCard = ({
  image,
  onClick,
}: {
  image: SelectGalleryImage;
  onClick?: () => void;
}) => {
  const { width, height, public_id, alt } = image;
  return (
    <AspectRatio
      ratio={width / height}
      className="cursor-pointer overflow-hidden rounded-sm transition-transform duration-200 hover:scale-[1.01]"
      onClick={onClick}
    >
      <CldImage src={public_id} alt={alt ?? ""} className="object-cover" fill />
    </AspectRatio>
  );
};

export default ImageCard;
