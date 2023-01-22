import { FC, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import { ProductCell } from "./ProductCell";

interface Props {
  id: number;
  name: string;
  year: number;
  bg: string;
}

export const ProductRow: FC<Props> = ({ id, name, year, bg }) => {

  const { setSelectedId, setShowDetails } = useContext(ProductsContext);

  const handleClick = () => {
    setSelectedId(id);
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