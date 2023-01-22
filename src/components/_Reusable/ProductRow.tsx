import { FC, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductInterface } from "../../interfaces/ProductInterface";

import { ProductCell } from "./ProductCell";

interface Props {
  id: number;
  name: string;
  year: number;
  bg: string;
  product: ProductInterface;
}

export const ProductRow: FC<Props> = ({ id, name, year, bg, product }) => {

  const { setSelectedProduct, setShowDetails } = useContext(ProductsContext);

  const handleClick = () => {
    setSelectedProduct(product);
    setShowDetails(true);
  }

  return (
    <tr className="bg-slate-100 hover:bg-slate-200 hover:cursor-pointer duration-300" onClick={handleClick}>
      <ProductCell>
        {id}
      </ProductCell>

      <ProductCell>
        <div 
          className="rounded-lg"
          style={{ backgroundColor: `${bg}`}}
        >
          {name}
        </div>
      </ProductCell>

      <ProductCell>
        {year}
      </ProductCell>
    </tr>
  )
}