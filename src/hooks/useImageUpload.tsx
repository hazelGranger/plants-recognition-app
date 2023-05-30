import { ChangeEvent, useState } from "react";
import { allowedImageTypes } from "../constants";

export const useImageUpload = (
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  onSelectImage: () => void
) => {
  const [image, setImage] = useState("");

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
        onSelectImage();
      };
      reader.onerror = (error) => {
        console.error("Error: ", error);
      };
    }
  };

  return {
    image,
    handleSelectImages,
  };
};
