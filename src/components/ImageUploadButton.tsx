import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, RefObject, forwardRef } from "react";

type ImageUploadButtonProps = {
  hasImage: boolean;
  ref: RefObject<HTMLInputElement>;
  handleSelectImages: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ImageUploadButton = forwardRef<HTMLInputElement, ImageUploadButtonProps>(
  ({ hasImage, handleSelectImages }, ref) => {
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
          ref={ref}
        />
      </label>
    );
  }
);

export default ImageUploadButton;
