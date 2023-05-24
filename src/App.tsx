import { AxiosError } from "axios";
import { ChangeEvent, useRef, useState } from "react";
import Result from "./Result";
import Title from "./components/Title";
import ActionPanel from "./components/ActionPanel";
import ImageContainer from "./components/ImageContainer";
import { identifySpecies } from "./services/identify";
import { allowedImageTypes } from "./constants";
import { Error } from "./types/error";

function App() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      var file = e.target.files[0];
      if (file && !allowedImageTypes.includes(file.type)) {
        setError({
          message: "Please select a valid image file like .png, .jpg, .jpeg",
        });
        setTimeout(() => {
          setError(null);
        }, 5000);
        return;
      }

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
    }
  };

  const identify = async () => {
    setIsIdentifying(true);

    try {
      const result = await identifySpecies(image);
      setResult(result.data);
      setIsIdentifying(false);
    } catch (error) {
      setIsIdentifying(false);
      setError(error as AxiosError);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const onClickImagePlaceholder = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="App-container">
      <Title>Plants Identification</Title>
      <ImageContainer
        image={image}
        isIdentifying={isIdentifying}
        handleClick={onClickImagePlaceholder}
      />
      <ActionPanel
        hasImage={!!image}
        isIdentifying={isIdentifying}
        ref={fileInputRef}
        handleSelectImages={handleSelectImages}
        handleIdentify={identify}
      />
      {!!error && <p className="error">{error.message}!</p>}
      <Result result={result} />
    </div>
  );
}

export default App;
