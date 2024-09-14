import { ChildrenProp } from "@/types";
import { ProductDocument } from "@/types/app-write.types";
import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Create the context
const ProductContext = createContext<{
  product?: ProductDocument;
  setProduct: Dispatch<SetStateAction<ProductDocument | undefined>>;
}>({ product: undefined, setProduct: () => undefined });

// Export a hook for easier access
export const useProductData = () => useContext(ProductContext);

// Context Provider component
export const ProductProvider = ({ children }: ChildrenProp) => {
  const [product, setProduct] = useState<ProductDocument>();

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
