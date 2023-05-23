import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "../placeholder-image.png";

type ImageContainerProps = {
  image: string; // base64string
  isIdentifying: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
};

const ImageContainer = ({
  image,
  isIdentifying,
  fileInputRef,
}: ImageContainerProps) => {
  return (
    <div className="image-container">
      {image ? (
        <img className="image" src={image} alt="uploaded plants" />
      ) : (
        <div
          className="image-placeholder"
          style={{ backgroundImage: `url(${placeholderImage})` }}
          onClick={(e) => {
            if (fileInputRef && fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
        ></div>
      )}

      {isIdentifying && (
        <>
          <div className="image-filter"></div>
          <FontAwesomeIcon
            className="identifying"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </>
      )}
    </div>
  );
};

export default ImageContainer;
