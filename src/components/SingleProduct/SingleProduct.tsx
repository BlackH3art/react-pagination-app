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
import { ErrorInterface } from "../../interfaces/ErrorInterface";
import { ErrorMessage } from "../_Reusable/ErrorMessage";

export const SingleProduct: FC = () => {

  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<ErrorInterface | null>(null);
  
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);
    setErrorObject(null);
    fetchSingleProduct();
  }, [id]);

  async function fetchSingleProduct() {
    try {
      const { data } = await getSingleProduct(Number(id));
      setProduct(data.data);

      setLoading(false);
    } catch (error: any) {
      setLoading(false);

      if(error.response?.status === 404) return setErrorObject({ msg: "Product not found.", code: 404 });
      if(error.response?.status >= 400) return setErrorObject({ msg: "Something wrong with the request", code: error.response?.status });
      if(error.response?.status >= 500) return setErrorObject({ msg: "Critical server error. Not your fault.", code: 500 });

      setErrorObject({ msg: "Unknown error, try again later.", code: error.response?.status });
    }
  }


  return (
    <ProductContainer>
      <TableContainer>

        <NavigateBack />

        {errorObject ? (
          <ErrorMessage msg={errorObject.msg} code={errorObject.code} />
        ) : (
          <ProductsTable>
            {loading ? <LoadingRow /> : product ? (
              <ProductRow 
                id={product.id}
                name={product.name}
                year={product.year}
                bg={product.color}
                product={product}
              />
            ) : null}
          </ProductsTable>
        )}

        
      </TableContainer>
    </ProductContainer>
  )
}