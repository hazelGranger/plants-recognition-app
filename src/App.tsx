import axios, { AxiosError } from "axios";
import { ChangeEvent, useRef, useState } from "react";
import Result from "./Result";
import Title from "./components/Title";
import ActionPanel from "./components/ActionPanel";
import ImageContainer from "./components/ImageContainer";

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
      <Title>Plants Identification</Title>
      <ImageContainer
        image={image}
        isIdentifying={isIdentifying}
        fileInputRef={fileInputRef}
      />
      <ActionPanel
        hasImage={!!image}
        isIdentifying={isIdentifying}
        fileInputRef={fileInputRef}
        handleSelectImages={handleSelectImages}
        handleIdentify={identify}
      />
      {error && <p className="error">{error.message}!</p>}
      <Result result={result} />
    </div>
  );
}

export default App;
