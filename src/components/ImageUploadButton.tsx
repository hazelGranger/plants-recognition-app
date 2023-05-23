import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, RefObject } from "react";

type ImageUploadButtonProps = {
  hasImage: boolean;
  fileInputRef: RefObject<HTMLInputElement>;
  handleSelectImages: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ImageUploadButton = ({
  hasImage,
  fileInputRef,
  handleSelectImages,
}: ImageUploadButtonProps) => {
  return (
    <label className="button">
      <div className="button-inner">
        <FontAwesomeIcon icon={faImages}></FontAwesomeIcon>
        <span className="button-icon-text">
          {hasImage ? "Change image" : "Upload an image"}
        </span>
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleSelectImages}
        ref={fileInputRef}
      />
    </label>
  );
};

export default ImageUploadButton;
