import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getProductsByPage } from "../api";

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
  selectedId: null,
  setSelectedId: () => {},
  loading: false,
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
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, [page, activePerPage]);
  
  async function fetchProducts() {
    try {
      setLoading(true);

      const { data } = await getProductsByPage(page, activePerPage);
      setProducts(data.data);
      setTotalPages(data.total_pages);

      setLoading(false);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
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
      selectedId,
      setSelectedId,
      loading,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}