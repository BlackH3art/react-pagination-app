import { FC, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../context/ProductsContext";
import { LoadingRow } from "../_Reusable/LoadingRow";

import { ProductContainer } from "../_Reusable/ProductContainer";
import { ProductRow } from "../_Reusable/ProductRow";
import { ProductsTable } from "../_Reusable/ProductsTable";
import { TableContainer } from "../_Reusable/TableContainer";
import { Pagination } from "./Pagination";
import { ProductsOptions } from "./ProductsOptions";

export const ProductsSection: FC = () => {

  const { products, setPage, page, loading } = useContext(ProductsContext);
  const { nr } = useParams();

  useEffect(() => {
    if(page !== Number(nr)) setPage(Number(nr));
  }, [nr]);
  

  return (
    <ProductContainer>
      <TableContainer>

        <ProductsOptions />

        <ProductsTable>

          {loading ? <LoadingRow /> : products.map((product, idx) => (
            <ProductRow 
              key={idx}
              id={product.id}
              name={product.name}
              year={product.year}
              bg={product.color}
            />
          ))}
        </ProductsTable>
      </TableContainer>

      <Pagination />

    </ProductContainer>
  );
}