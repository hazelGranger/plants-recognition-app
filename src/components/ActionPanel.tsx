import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";
import Button from "./Button";
import ImageUploadButton from "./ImageUploadButton";

type ActionPanelProps = {
  hasImage: boolean;
  isIdentifying: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleSelectImages: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIdentify: () => void;
};

const ActionPanel = ({
  hasImage,
  isIdentifying,
  handleSelectImages,
  fileInputRef,
  handleIdentify,
}: ActionPanelProps) => {
  return (
    <div className="button-wrapper">
      {hasImage && (
        <Button
          text="Identify"
          icon={faMagnifyingGlass}
          handleClick={handleIdentify}
          isLoading={isIdentifying}
        />
      )}

      <ImageUploadButton
        hasImage={hasImage}
        fileInputRef={fileInputRef}
        handleSelectImages={handleSelectImages}
      />
    </div>
  );
};

export default ActionPanel;
