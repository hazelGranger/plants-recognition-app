import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, forwardRef } from "react";
import Button from "./Button";
import ImageUploadButton from "./ImageUploadButton";

type ActionPanelProps = {
  hasImage: boolean;
  isIdentifying: boolean;
  ref: React.RefObject<HTMLInputElement>;
  handleFocus: () => void;
  handleSelectImages: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIdentify: () => void;
};

const ActionPanel = forwardRef<HTMLInputElement, ActionPanelProps>(
  (
    {
      hasImage,
      isIdentifying,
      handleSelectImages,
      handleIdentify,
      handleFocus,
    },
    ref
  ) => {
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
          handleFocus={handleFocus}
        />
      </div>
    );
  }
);

export default ActionPanel;
