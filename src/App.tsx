import { ChangeEvent, useRef, useState } from "react";
import Result from "./Result";
import Title from "./components/Title";
import ActionPanel from "./components/ActionPanel";
import ImageContainer from "./components/ImageContainer";
import { identifySpecies } from "./services/identify";
import { allowedImageTypes } from "./constants";
import { useErrorHandle } from "./hooks/useErrorHandle";

function App() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const { error, setError } = useErrorHandle(5000);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      var file = e.target.files[0];
      if (file && !allowedImageTypes.includes(file.type)) {
        setError("Please select a valid image file like .png, .jpg, .jpeg");
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
    } catch (error: any) {
      setIsIdentifying(false);
      console.error(error);
      setError(error.response?.data ?? error.message);
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
      {error && <p className="error">{error}</p>}
      <ActionPanel
        hasImage={!!image}
        isIdentifying={isIdentifying}
        ref={fileInputRef}
        handleSelectImages={handleSelectImages}
        handleIdentify={identify}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
