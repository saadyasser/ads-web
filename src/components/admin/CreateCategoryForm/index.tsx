"use client";
import { Container, Input, TextArea, Loading } from "@/components";
import { useShowToast } from "@/components/Toast";

import { createCategory } from "@/lib/actions";
import dynamic from "next/dynamic";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

export type FormValues = {
  name: string;
  description: string;
  image: File[];
};
const FileUploader = dynamic(() => import("@/components/FileUploader"), {
  loading: () => <Loading />,
  ssr: false,
});
const SubmitButton = dynamic(() => import("@/components/SubmitButton"), {
  loading: () => <Loading />,
  ssr: false,
});
export const CreateCategoryForm = () => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>();
  const toast = useShowToast();

  const methods = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
      image: [],
    },
  });

  const handleDrop = (acceptedFiles: File[]) => {
    setDroppedFiles(acceptedFiles);
  };
  const onSubmit = methods.handleSubmit(async (data) => {
    if (!droppedFiles) return;

    const formData = new FormData();
    formData.append("blobFile", droppedFiles[0]);
    formData.append("fileName", droppedFiles[0]?.name);

    const categoryDate = {
      ...data,
      image: formData,
    };
    console.log("🚀 ~ onSubmit ~ categoryDate:", categoryDate);
    const response = await createCategory(categoryDate);
    if (response.status == 200 && response.data) {
      toast("Successfully created the  Category", "success");
      methods.reset();
      setDroppedFiles([]);
    }
  });

  return (
    <FormProvider {...methods}>
      <section className=" bg-[#F8F9FA] dark:bg-black-active mb-8">
        <Container className="flex items-center justify-center max-xl:px-4">
          <div className="flex justify-center w-full rounded-lg">
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-center text-black dark:text-white font-gilroy lg:text-4xl">
                Add a new Category
              </h2>
              <form onSubmit={onSubmit} className="w-full mt-4" noValidate>
                <Input
                  {...methods.register("name", {
                    required: "Category Name is required",
                  })}
                  label="Category Name"
                  placeholder="UI Components .."
                  errorMessage={methods.formState.errors.name?.message}
                  error={!!methods.formState.errors.name}
                  required
                />

                <TextArea
                  {...methods.register("description", {
                    required: "Product Description is required",
                  })}
                  label="Product Description"
                  errorMessage={methods.formState.errors.description?.message}
                  error={!!methods.formState.errors.description}
                  inputClassName="min-h-[159px] h-[159px]"
                  placeholder="Awesome pre-built primary button .."
                  required
                />

                <FileUploader
                  label="please choose Category image (choose just 1 images with max size 5MB)"
                  dropHandler={handleDrop}
                  maxFiles={1}
                  name="image"
                />
                <SubmitButton isSubmitting={methods.formState.isSubmitting} />
              </form>
            </div>
          </div>
        </Container>
      </section>
    </FormProvider>
  );
};

export default CreateCategoryForm;
