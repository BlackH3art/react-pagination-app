import { Dispatch, SetStateAction } from "react";
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
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  loading: boolean;
}