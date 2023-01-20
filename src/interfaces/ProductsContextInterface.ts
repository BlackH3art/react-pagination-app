import { Dispatch, SetStateAction } from "react";
import { ProductInterface } from "./ProductInterface";

export interface ProductsContextInterface {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  products: ProductInterface[];
}