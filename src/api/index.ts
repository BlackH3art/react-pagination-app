import axios from 'axios';
import { ProductsResponseInterface, SingleProductResponseInterface } from '../interfaces/ProductsResponseInterface';

const API = axios.create({
  baseURL: "https://reqres.in/api/products",
});

export const getProductsByPage = (page: number, perPage: number) => API.get<ProductsResponseInterface>(`/?per_page=${perPage}&page=${page}`);
export const getSingleProduct = (id: number) => API.get<SingleProductResponseInterface>(`/${id}`);