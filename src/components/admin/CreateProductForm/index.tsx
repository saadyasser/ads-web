"use client";
import { Container, Input, TextArea, Loading } from "@/components";
import dynamic from "next/dynamic";

import { useShowToast } from "@/components/Toast";
import { createProduct } from "@/lib/actions/products.actions";
import { CategoryDocument } from "@/types/app-write.types";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const FileUploader = dynamic(() => import("@/components/FileUploader"), {
  loading: () => <Loading />,
  ssr: false,
});
const MarkdownEditor = dynamic(() => import("@/components/MarkdownEditor"), {
  loading: () => <Loading />,
  ssr: false,
});
const SubmitButton = dynamic(() => import("@/components/SubmitButton"), {
  loading: () => <Loading />,
  ssr: false,
});
export type FormValues = {
  title: string;
  price: string;
  description: string;
  specifications: string;
  category: string;
  images: File[];
};

export const CreateProductForm = ({
  categoriesList,
}: {
  categoriesList: CategoryDocument[];
}) => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const toast = useShowToast();

  const categorySelectOptions = categoriesList?.map((category) => {
    return { name: category.name, value: category.$id };
  });

  const methods = useForm<FormValues>({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      specifications: "",
      category: "",
      images: [],
    },
  });

  const handleDrop = (acceptedFiles: File[]) => {
    setDroppedFiles(acceptedFiles);
  };
  const onSubmit = methods.handleSubmit(async (data) => {
    const imageFiles = await Promise.all(
      droppedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("blobFile", file);
        formData.append("fileName", file.name);

        return {
          file: formData,
        };
      })
    );

    const productDate = {
      ...data,
      images: imageFiles,
    };
    const response = await createProduct(productDate);
    console.log("🚀 ~ onSubmit ~ response:", response);
    if (response.status == 200 && response.data) {
      toast("Successfully created the  Product", "success");
      methods.reset();
      setDroppedFiles([]);
    } else toast("Error creating the product", "error");
  });

  return (
    <FormProvider {...methods}>
      <section className=" bg-[#F8F9FA] dark:bg-black-active mb-8">
        <Container className="flex items-center justify-center max-xl:px-4">
          <div className="flex justify-center w-full rounded-lg">
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-center text-black dark:text-white font-georgia lg:text-4xl">
                Add new Item of your library
              </h2>
              <form onSubmit={onSubmit} className="w-full mt-4" noValidate>
                <Input
                  {...methods.register("title", {
                    required: "Product Title is required",
                  })}
                  label="Product Title"
                  placeholder="Primary Button .."
                  errorMessage={methods.formState.errors.title?.message}
                  error={!!methods.formState.errors.title}
                  required
                />
                <Input
                  {...methods.register("price", {
                    required: "Product Price is required",
                  })}
                  label="Product Price"
                  type="number"
                  min={0}
                  placeholder="0.00"
                  errorMessage={methods.formState.errors.price?.message}
                  error={!!methods.formState.errors.price}
                  required
                />
                <div className="">
                  <label
                    htmlFor="categoriesSelect"
                    className="text-black dark:text-white text-sm/6"
                  >
                    Select the product category{" "}
                    <span className="text-primary dark:text-danger">*</span>
                  </label>

                  <select
                    className="w-full px-4 py-4 my-4 rounded-lg border-[1px] border-[#303030] dark:border-black cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-double "
                    id="categoriesSelect"
                    {...methods.register("category", {
                      required: "Product Category is required",
                    })}
                  >
                    {categorySelectOptions &&
                      categorySelectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      ))}
                  </select>
                </div>
                <TextArea
                  {...methods.register("description", {
                    required: "Product Description is required",
                  })}
                  label="Product Description"
                  errorMessage={methods.formState.errors.description?.message}
                  error={!!methods.formState.errors.description}
                  inputClassName="min-h-[159px] h-[159px]"
                  placeholder="Awesome hand-made primary button .."
                  required
                />
                <MarkdownEditor
                  name="specifications"
                  label="Product Specifications"
                />
                <FileUploader
                  label="please choose product images (choose 4 images with max size 5MB)"
                  dropHandler={handleDrop}
                  maxFiles={4}
                  name="images"
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

export default CreateProductForm;
