import {
  IconDefinition,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  text: string;
  icon: IconDefinition;
  handleClick?: () => void;
  isLoading?: boolean;
};

const Button = ({
  text,
  icon,
  handleClick,
  isLoading = false,
}: ButtonProps) => {
  return (
    <button className="button" onClick={handleClick}>
      <div className="button-inner">
        {isLoading ? (
          <FontAwesomeIcon
            className="spinner"
            icon={faCircleNotch}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        )}
        <span className="button-icon-text">{text}</span>
      </div>
    </button>
  );
};

export default Button;
