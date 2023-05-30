import { useRef } from "react";
import Result from "./components/Result";
import Title from "./components/Title";
import ActionPanel from "./components/ActionPanel";
import ImageContainer from "./components/ImageContainer";
import { useErrorHandle } from "./hooks/useErrorHandle";
import { useImageIdentify } from "./hooks/useImageIdentify";
import { useImageUpload } from "./hooks/useImageUpload";

function App() {
  const { error, setError } = useErrorHandle(5000);
  const { image, handleSelectImages } = useImageUpload(setError, () => {
    setResult(null);
  });
  const { result, setResult, isIdentifying, handleIdentify } = useImageIdentify(
    image,
    setError
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        handleIdentify={handleIdentify}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
