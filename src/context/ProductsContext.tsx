import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getProductsByPage } from "../api";
import { ErrorInterface } from "../interfaces/ErrorInterface";

import { ProductInterface } from "../interfaces/ProductInterface";
import { ProductsContextInterface } from "../interfaces/ProductsContextInterface";


export const ProductsContext = createContext<ProductsContextInterface>({
  page: 1,
  setPage: () => {},
  products: [],
  totalPages: 0,
  activePerPage: 5,
  setActivePerPage: () => {},
  showDetails: false,
  setShowDetails: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  loading: false,
  errorObject: null,
});

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = ({ children }) => {

  const [page, setPage] = useState<number>(1);
  const [activePerPage, setActivePerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<ErrorInterface | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [page, activePerPage]);
  
  async function fetchProducts() {
    
    try {
      setLoading(true);
      setErrorObject(null);

      const { data } = await getProductsByPage(page, activePerPage);
      if(data.data.length === 0) throw new Error();
      
      setProducts(data.data);
      setTotalPages(data.total_pages);

      setLoading(false);
      
    } catch (error: any) {
      setLoading(false);

      if(error.response?.status === 404) return setErrorObject({ msg: "Page not found.", code: 404 });
      if(error.response?.status >= 400) return setErrorObject({ msg: "Something wrong with the request", code: error.response?.status });
      if(error.response?.status >= 500) return setErrorObject({ msg: "Critical server error. Not your fault.", code: 500 });

      setErrorObject({ msg: "Unknown error, try again later.", code: error.response?.status });
    }
  }

  
  return(
    <ProductsContext.Provider value={{
      page,
      setPage,
      products,
      totalPages,
      activePerPage,
      setActivePerPage,
      showDetails,
      setShowDetails,
      selectedProduct,
      setSelectedProduct,
      loading,
      errorObject,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}