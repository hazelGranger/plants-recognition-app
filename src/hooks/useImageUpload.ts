import { ChangeEvent, useState } from "react";
import { allowedImageTypes } from "../constants";

export const useImageUpload = (
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  onSelectImage: () => void
) => {
  const [image, setImage] = useState("");

  const handleImageUpload = (file: File) => {
    if (file && !allowedImageTypes.includes(file.type)) {
      setError("Please select a valid image file like .png, .jpg, .jpeg");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageString = (reader.result as string) ?? "";
      setImage(imageString);
      onSelectImage();
    };
    reader.onerror = (error) => {
      console.error("Error: ", error);
    };
  };

  const handleSelectImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      handleImageUpload(e.target.files[0]);
    }
  };

  const handleDropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files != null) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  return {
    image,
    handleSelectImages,
    handleDropImage,
  };
};
