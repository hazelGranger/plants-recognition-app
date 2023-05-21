import axios, { AxiosError } from "axios";
import { ChangeEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faMagnifyingGlass,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import Result from "./Result";
import placeholderImage from "./placeholder-image.png";
import logo from "./logo.svg";

function App() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        const imageString = (reader.result as string) ?? "";
        setImage(imageString);
        setResult(null);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const identify = () => {
    setIsIdentifying(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/identify`, {
        images: [image],
      })
      .then((v) => {
        setResult(v.data);
        setIsIdentifying(false);
      })
      .catch((err: AxiosError) => {
        console.error(err);
        setIsIdentifying(false);
        setError(err);
        setTimeout(() => {
          setError(null);
        }, 5000);
      });
  };

  return (
    <div className="App-container">
      <h2 className="title">
        <img src={logo} className="logo" alt="logo" />
        Plants Identification
      </h2>
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
      <div className="button-wrapper">
        {image && (
          <button className="button" onClick={identify}>
            <div className="button-inner">
              {isIdentifying ? (
                <FontAwesomeIcon
                  className="spinner"
                  icon={faCircleNotch}
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              )}
              <span className="button-icon-text">Identify</span>
            </div>
          </button>
        )}

        <label className="button">
          <div className="button-inner">
            <FontAwesomeIcon icon={faImages}></FontAwesomeIcon>
            <span className="button-icon-text">
              {image ? "Change image" : "Upload an image"}
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
      </div>

      {error && <p className="error">{error.message}!</p>}
      <Result result={result} />
    </div>
  );
}

export default App;
