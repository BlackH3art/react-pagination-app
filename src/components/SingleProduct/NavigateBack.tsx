import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";

import { Title } from "../_Reusable/Title";
import { TitleContainer } from "../_Reusable/TitleContainer";
import { IoIosArrowBack } from 'react-icons/io';

export const NavigateBack: FC = () => {

  const { page } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/page/${page}`);
  }

  return (
    <TitleContainer>

      <Title title='Product' />

      <button className="flex items-center rounded-lg duration-300 hover:bg-slate-100 px-4" onClick={handleClick}>
        <IoIosArrowBack className="mr-2" /> back
      </button>

    </TitleContainer>
  )
}