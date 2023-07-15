import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, RefObject, forwardRef } from "react";
import { useButton } from "react-aria";

type ImageUploadButtonProps = {
  hasImage: boolean;
  ref: RefObject<HTMLInputElement>;
  handleSelectImages: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
};

const ImageUploadButton = forwardRef<HTMLInputElement, ImageUploadButtonProps>(
  ({ hasImage, handleSelectImages, handleFocus }, ref) => {
    let { buttonProps } = useButton({ elementType: "label" }, ref as any);

    return (
      <label
        className="button"
        {...buttonProps}
        htmlFor="image"
        aria-controls="image"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleFocus();
          }
        }}
      >
        <div className="button-inner">
          <FontAwesomeIcon icon={faImages}></FontAwesomeIcon>
          <span className="button-icon-text">
            {hasImage ? "Change image" : "Upload an image"}
          </span>
        </div>
        <input
          type="file"
          id="image"
          multiple
          accept="image/*"
          onChange={handleSelectImages}
          ref={ref}
          tabIndex={-1}
        />
      </label>
    );
  }
);

export default ImageUploadButton;
