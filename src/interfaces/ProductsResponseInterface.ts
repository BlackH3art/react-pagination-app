import { ProductInterface } from "./ProductInterface";

export interface ProductsResponseInterface {
  "page": number;
  "per_page": number;
  "total": number;
  "total_pages": number;
  "data": ProductInterface[];
}

export interface SingleProductResponseInterface {
  "data": ProductInterface;
}