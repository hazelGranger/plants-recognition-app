import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faImage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type ImageContainerProps = {
  image: string; // base64string
  isIdentifying: boolean;
  handleClick: () => void;
  handleDropImage: (e: React.DragEvent<HTMLDivElement>) => void;
};

const ImageContainer = ({
  image,
  isIdentifying,
  handleClick,
  handleDropImage,
}: ImageContainerProps) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="image-container">
      {image ? (
        <img className="image" src={image} alt="uploaded plants" />
      ) : (
        <div
          className={
            isDragging
              ? "image-placeholder image-placeholder--isDragging"
              : "image-placeholder"
          }
          onClick={handleClick}
          onDragOver={(e) => {
            // prevent default browser behavior -- open the file in the browser
            e.preventDefault();
            setIsDragging(true);
          }}
          onDrop={handleDropImage}
        >
          <FontAwesomeIcon
            className="image-placeholder-icon"
            icon={faImage}
          ></FontAwesomeIcon>
          <p className="image-instruction">
            Drag & Drop an image or
            <br /> Click to upload an image
          </p>
        </div>
      )}

      {isIdentifying && (
        <>
          <div className="image-filter"></div>
          <FontAwesomeIcon
            className="identifying-icon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </>
      )}
    </div>
  );
};

export default ImageContainer;
