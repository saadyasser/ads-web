"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

type FileUploaderProps = {
  dropHandler: (acceptedFiles: File[]) => void;
  maxFiles?: number;
  maxFilesSize?: number;
};

const FileUploader = ({
  dropHandler,
  maxFiles = 4,
  maxFilesSize = 2,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {
    formState: { isSubmitting },
  } = useFormContext();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length + files.length > maxFiles) {
        setError(`You can only upload up to ${maxFiles} files.`);
        return;
      }

      setError(null);

      const previews = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles((prev) => [...prev, ...previews]);
      dropHandler([...files, ...acceptedFiles]);
    },
    [dropHandler, files, maxFiles]
  );

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    dropHandler(newFiles);
  };

  const thumbs = files.map((file: any, index) => (
    <div key={index} className="relative inline-block ">
      <Image
        alt="image preview"
        src={file.preview}
        width={200}
        height={200}
        className="border rounded"
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          removeFile(index);
        }}
        className="absolute top-0 right-0 px-[7px]  text-red-500 bg-white rounded-full"
      >
        &times;
      </button>
    </div>
  ));

  useEffect(() => {
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    maxFiles,
    // maxSize: maxFilesSize,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${
          error ? "border-red-500" : "border-gray-300"
        } ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop some files here, or click to select files</p>
        )}
        <div className="flex items-center gap-3 mt-4">{thumbs}</div>
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {isSubmitting && files.length === 0 && (
        <p className="mt-2 text-sm text-red-500">
          Please upload at least one image.
        </p>
      )}
    </div>
  );
};

export default FileUploader;
