import { createContext, FC, ReactNode } from "react";
import { ProductsContextInterface } from "../interfaces/ProductsContextInterface";

export const ProductsContext = createContext<ProductsContextInterface>({
  
});

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = ({ children }) => {

  return(
    <ProductsContext.Provider value={{
      
    }}>
    {children}
    </ProductsContext.Provider>
  )
}