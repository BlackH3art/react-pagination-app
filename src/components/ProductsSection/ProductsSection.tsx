import { FC, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../context/ProductsContext";

import { ProductContainer } from "../_Reusable/ProductContainer";
import { ProductRow } from "../_Reusable/ProductRow";
import { ProductsTable } from "../_Reusable/ProductsTable";
import { Pagination } from "./Pagination";

export const ProductsSection: FC = () => {

  const { products, setPage } = useContext(ProductsContext);
  const { nr } = useParams();

  useEffect(() => {
    setPage(Number(nr));
  }, [nr]);
  

  return (
    <ProductContainer>

      <ProductsTable>
        {products.map((product, idx) => (
          <ProductRow 
            key={idx}
            id={product.id}
            name={product.name}
            year={product.year}
            bg={product.color}
          />
        ))}
      </ProductsTable>

      <Pagination />

    </ProductContainer>
  );
}