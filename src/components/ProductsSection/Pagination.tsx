import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { PaginationButton } from "../_Reusable/PaginationButton";

export const Pagination: FC = () => {

  const { page, totalPages } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if(!(page + 1 > totalPages)) navigate(`/page/${page + 1}`);
    
  }
  const handlePreviousPage = () => {
    if(!(page - 1 < 1)) navigate(`/page/${page - 1}`);

  }

  return (
    <div className="p-2 flex w-24 justify-between">

      <PaginationButton 
        icon={<AiOutlineArrowLeft size={24} />} 
        handler={handlePreviousPage} 
        disabled={page - 1 < 1}
      />
      <PaginationButton 
        icon={<AiOutlineArrowRight size={24} />} 
        handler={handleNextPage} 
        disabled={page + 1 > totalPages}
      />

    </div>
  )
}