"use client";
import { Button, Container, Input, Select, TextArea } from "@/components";
import FileUploader from "@/components/FileUploader";
import { ArrowRightHiIcon } from "@/lib/@react-icons";
import { createProduct } from "@/lib/actions/products.actions";
import { Category } from "@/types/app-write.types";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

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
  categoriesList: Category[];
}) => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

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
    console.log("🚀 ~ onSubmit ~ productDate:", productDate);
    const response = await createProduct(productDate);
    if (response.status == 200 && response.data) {
      alert("Successfully created the  product");
      methods.reset();
    }
  });

  return (
    <FormProvider {...methods}>
      <section className="py-8 bg-[#F8F9FA] dark:bg-black-active md:py-16">
        <Container className="flex items-center justify-center max-xl:px-4">
          <div className="flex justify-center w-full p-6 border-[24px] border-white dark:border-black rounded-lg">
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
                  <label htmlFor="categoriesSelect">
                    Select the product category{" "}
                  </label>

                  <select
                    className="w-full px-4 py-4 my-4 rounded-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-double "
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
                <TextArea
                  {...methods.register("specifications", {
                    required: "Product Specifications are required",
                  })}
                  label="Product Specifications"
                  errorMessage={
                    methods.formState.errors.specifications?.message
                  }
                  error={!!methods.formState.errors.specifications}
                  inputClassName="min-h-[159px] h-[159px]"
                  placeholder="Has a powerful click!"
                  required
                />
                <FileUploader
                  label="please choose product images (choose 4 images with max size 5MB)"
                  dropHandler={handleDrop}
                  maxFiles={4}
                  name="images"
                />
                <Button
                  icon={<ArrowRightHiIcon />}
                  className="w-full mt-6"
                  iconPosition="after"
                  type="submit"
                >
                  {methods.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </FormProvider>
  );
};

export default CreateProductForm;
