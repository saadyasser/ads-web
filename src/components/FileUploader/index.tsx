"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useFormContext, Controller } from "react-hook-form";

type FileUploaderProps = {
  dropHandler: (acceptedFiles: File[]) => void;
  name: string;
  label?: string;
  maxFiles?: number;
  maxFileSize?: number;
};

export const FileUploader = ({
  dropHandler,
  name,
  label,
  maxFiles = 4,
  maxFileSize = 5,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {
    control,
    setError: setFormError,
    clearErrors,
    setValue,
    trigger,
  } = useFormContext();
  const onDrop = (acceptedFiles: File[]) => {
    let hasError = false;

    const oversizedFiles = acceptedFiles.filter(
      (file) => file.size > maxFileSize * 1024 * 1024
    );

    if (oversizedFiles.length > 0) {
      setError(`Each file must be smaller than ${maxFileSize}MB.`);
      setFormError(name, {
        type: "manual",
        message: `Each file must be smaller than ${maxFileSize}MB.`,
      });
      hasError = true;
    }

    if (acceptedFiles.length + files.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files.`);
      setFormError(name, {
        type: "manual",
        message: `You can only upload up to ${maxFiles} files.`,
      });
      hasError = true;
    }

    if (hasError) return;

    clearErrors(name);
    setError(null);

    const updatedFiles = [
      ...files,
      ...acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      ),
    ];

    setFiles(updatedFiles);
    setValue(name, updatedFiles);
    dropHandler(updatedFiles);

    trigger(name);
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setValue(name, updatedFiles);
    dropHandler(updatedFiles);
    trigger(name);
  };

  useEffect(() => {
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    maxFiles,
    maxSize: maxFileSize * 1024 * 1024,
  });

  const thumbs = files.map((file: any, index) => (
    <div key={index} className="relative inline-block">
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
        className="absolute top-0 right-0 px-[7px] text-danger bg-white rounded-full"
      >
        &times;
      </button>
    </div>
  ));

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Please upload at least one image.",
        validate: (value) =>
          value && value.length > 0
            ? true
            : "Please upload at least one image.",
      }}
      render={({ field, fieldState }) => (
        <div className="my-3">
          {label && (
            <div className="text-black dark:text-white text-sm/6">
              {label}
              <span className="text-primary dark:text-danger"> *</span>
            </div>
          )}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-md p-6 my-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${
              error || fieldState.error ? "border-danger" : "border-gray-300"
            } ${isDragActive ? "border-blue-500 bg-primary-light bg-opacity-70" : "border-gray-300"}`}
          >
            <input
              {...getInputProps()}
              onChange={(e) => {
                clearErrors(name);
                setError(null);
                return field.onChange(e);
              }}
            />
            <p
              className={
                error || fieldState.error
                  ? "text-danger"
                  : "text-black dark:text-white"
              }
            >
              {isDragActive
                ? "Drop the files here ..."
                : "Drag & drop some files here, or click to select files"}
            </p>
            <div className="flex items-center gap-3 mt-4">{thumbs}</div>
          </div>
          {(error || fieldState.error) && (
            <p className="mt-2 text-sm text-danger">
              {error || fieldState?.error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FileUploader;
