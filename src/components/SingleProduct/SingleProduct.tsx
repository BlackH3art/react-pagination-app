import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductInterface } from "../../interfaces/ProductInterface";

import { ProductContainer } from "../_Reusable/ProductContainer";
import { ProductRow } from "../_Reusable/ProductRow";
import { ProductsTable } from "../_Reusable/ProductsTable";

import { getSingleProduct } from "../../api";

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

      <ProductsTable>
        {product ? (
          <ProductRow 
            id={product.id}
            name={product.name}
            year={product.year}
            bg={product.color}
          />
        ) : null}
      </ProductsTable>

    </ProductContainer>
  )
}