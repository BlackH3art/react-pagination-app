import { FC } from "react";
import { ProductsTable } from "../_Reusable/ProductsTable";

export const ProductsSection: FC = () => {

  return (
    <section className="flex h-64 w-full justify-center bg-blue-200">
      <div className="flex h-full w-full md:w-4/5 lg:w-3/5 items-center justify-center bg-green-600">

        <ProductsTable>
          
        </ProductsTable>

      </div>
    </section>
  );
}