import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductInterface } from "../../interfaces/ProductInterface";

import { ProductContainer } from "../_Reusable/ProductContainer";
import { ProductRow } from "../_Reusable/ProductRow";
import { ProductsTable } from "../_Reusable/ProductsTable";

import { getSingleProduct } from "../../api";
import { TableContainer } from "../_Reusable/TableContainer";
import { NavigateBack } from "./NavigateBack";
import { LoadingRow } from "../_Reusable/LoadingRow";

export const SingleProduct: FC = () => {

  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true)
    fetchSingleProduct();
  }, [id]);

  async function fetchSingleProduct() {
    try {
      const { data } = await getSingleProduct(Number(id));
      setProduct(data.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


  return (
    <ProductContainer>
      <TableContainer>

        <NavigateBack />

        <ProductsTable>
          {loading ? <LoadingRow /> : product ? (
            <ProductRow 
              id={product.id}
              name={product.name}
              year={product.year}
              bg={product.color}
            />
          ) : null}
        </ProductsTable>
        
      </TableContainer>
    </ProductContainer>
  )
}