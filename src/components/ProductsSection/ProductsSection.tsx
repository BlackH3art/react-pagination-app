import { FC, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../context/ProductsContext";

import { ProductRow } from "../_Reusable/ProductRow";
import { ProductsTable } from "../_Reusable/ProductsTable";

export const ProductsSection: FC = () => {

  const { products, setPage } = useContext(ProductsContext);
  const { nr } = useParams();

  useEffect(() => {
    setPage(Number(nr));
  }, []);
  

  return (
    <section className="flex h-64 w-full justify-center bg-blue-200">
      <div className="flex h-full w-full md:w-4/5 lg:w-3/5 justify-center bg-green-600">

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

      </div>
    </section>
  );
}