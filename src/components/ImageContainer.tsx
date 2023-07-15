import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faImage } from "@fortawesome/free-solid-svg-icons";

type ImageContainerProps = {
  image: string; // base64string
  isIdentifying: boolean;
  handleClick: () => void;
};

const ImageContainer = ({
  image,
  isIdentifying,
  handleClick,
}: ImageContainerProps) => {
  return (
    <div className="image-container">
      {image ? (
        <img className="image" src={image} alt="uploaded plants" />
      ) : (
        <div className="image-placeholder" onClick={handleClick}>
          <FontAwesomeIcon
            className="image-placeholder-icon"
            icon={faImage}
          ></FontAwesomeIcon>
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
