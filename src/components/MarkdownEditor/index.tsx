"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import MarkdownEditorComponent from "@uiw/react-markdown-editor";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

type MarkdownEditorProps = {
  name: string;
  label?: string;
};

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  name,
  label,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="my-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} <span className="text-danger">*</span>
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ required: "This field is required." }}
        render={({ field }) => (
          <>
            <MarkdownEditorComponent
              value={field.value || ""}
              onChange={(value) => field.onChange(value)}
              style={{ height: "300px" }}
            />
            {errors[name] && (
              <p className="mt-2 text-sm text-danger">
                {errors[name]?.message as any}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default MarkdownEditor;
