import Image from "next/image";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

const MAX_IMAGES = 5;

const ImageUploader = ({
  file,
  setFile,
  images,
  setImages,
}: {
  file: File[];
  setFile: Dispatch<SetStateAction<File[]>>;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (images.length >= MAX_IMAGES) {
        toast.warning(`You can only upload up to ${MAX_IMAGES} images.`);
        return;
      }
      const remainingSlots = MAX_IMAGES - images.length;
      const newImages = acceptedFiles
        .slice(0, remainingSlots)
        .filter((file) => !images.includes(URL.createObjectURL(file)))
        .map((file) => URL.createObjectURL(file));
      if (newImages.length === 0) {
        toast.warning("No new images to add.");
        return;
      }
      setImages((prevImages) => [...prevImages, ...newImages]);
      setFile((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
    [images, setImages, setFile]
  );

  const handleDelete = (index: number) => {
    URL.revokeObjectURL(images[index]);
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  return (
    <div className="border-dashed border-2 border-amber-300 flex flex-wrap justify-center items-center p-5 w-full min-h-40">
      <div className="w-full text-center">
        <i
          {...getRootProps()}
          className="fa-regular fa-image text-7xl text-center cursor-pointer text-zinc-500"
        ></i>
      </div>
      <input {...getInputProps()} />
      {images.length > 0 ? (
        images.map((image, index) => (
          <div key={index} className="w-1/3 h-28 m-1 relative border">
            <Image
              width={500}
              height={500}
              src={image}
              alt={`uploaded image ${index}`}
              className="w-full h-full"
            />
            <i
              onClick={() => handleDelete(index)}
              className="fa-regular fa-circle-xmark text-3xl text-red-500 absolute top-0 cursor-pointer"
            />
          </div>
        ))
      ) : (
        <p>Choose More photos of the tour</p>
      )}
    </div>
  );
};

export default ImageUploader
