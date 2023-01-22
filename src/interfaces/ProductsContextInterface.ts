import { Dispatch, SetStateAction } from "react";
import { ErrorInterface } from "./ErrorInterface";
import { ProductInterface } from "./ProductInterface";

export interface ProductsContextInterface {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  products: ProductInterface[];
  totalPages: number;
  activePerPage: number;
  setActivePerPage: Dispatch<SetStateAction<number>>;
  showDetails: boolean;
  setShowDetails: Dispatch<SetStateAction<boolean>>;
  selectedProduct: ProductInterface | null;
  setSelectedProduct: Dispatch<SetStateAction<ProductInterface | null>>;
  loading: boolean;
  errorObject: ErrorInterface | null;
}