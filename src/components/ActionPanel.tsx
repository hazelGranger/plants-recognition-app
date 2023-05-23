import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, forwardRef } from "react";
import Button from "./Button";
import ImageUploadButton from "./ImageUploadButton";

type ActionPanelProps = {
  hasImage: boolean;
  isIdentifying: boolean;
  ref: React.RefObject<HTMLInputElement>;
  handleSelectImages: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIdentify: () => void;
};

const ActionPanel = forwardRef<HTMLInputElement, ActionPanelProps>(
  ({ hasImage, isIdentifying, handleSelectImages, handleIdentify }, ref) => {
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
          ref={ref}
          handleSelectImages={handleSelectImages}
        />
      </div>
    );
  }
);

export default ActionPanel;
