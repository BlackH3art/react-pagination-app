import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getProductsByPage } from "../api";

import { ProductInterface } from "../interfaces/ProductInterface";
import { ProductsContextInterface } from "../interfaces/ProductsContextInterface";


export const ProductsContext = createContext<ProductsContextInterface>({
  page: 1,
  setPage: () => {},
  products: [],
});

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = ({ children }) => {

  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [page]);
  
  async function fetchProducts() {
    try {
      
      const { data } = await getProductsByPage(page);
      setProducts(data.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  
  return(
    <ProductsContext.Provider value={{
      page,
      setPage,
      products
    }}>
      {children}
    </ProductsContext.Provider>
  )
}