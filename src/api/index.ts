import axios from 'axios';
import { ProductsResponseInterface, SingleProductResponseInterface } from '../interfaces/ProductsResponseInterface';

const API = axios.create({
  baseURL: "https://reqres.in/api/products",
});

export const getProductsByPage = (page: number) => API.get<ProductsResponseInterface>(`/?per_page=5&page=${page}`);
export const getSingleProduct = (id: number) => API.get<SingleProductResponseInterface>(`/${id}`);