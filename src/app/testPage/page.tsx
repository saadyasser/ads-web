"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { uploadProductImages } from "@/lib/actions/products.actions";
import { Button } from "@/components";

type FormValues = {
  images: FileList;
};

const TestPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    let formData;
    if (values.images && values.images?.length > 0) {
      const blobFile = new Blob([values.images[0]], {
        type: values.images[0].type,
      });

      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.images[0].name);

      try {
        const res = await uploadProductImages({ images: formData });
        console.log("Upload successful", res);
      } catch (error) {
        console.error("Upload failed", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register("images")} multiple required />
      <Button type="submit">Create Product</Button>
    </form>
  );
};

export default TestPage;
