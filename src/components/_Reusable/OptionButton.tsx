import { FC, useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

interface Props {
  perPage: number;
}

export const OptionButton: FC<Props> = ({ perPage }) => {

  const { activePerPage, setActivePerPage } = useContext(ProductsContext)

  const handleClick = () => {
    setActivePerPage(perPage);
  }

  return (
    <button 
      className={`rounded-lg border-[1px] w-8 h-8 mx-1 text-sm duration-300 ${activePerPage === perPage ? "border-myPink text-myPink font-semibold hover:bg-pink-100" : "hover:bg-slate-100"}`}
      onClick={handleClick}
      disabled={activePerPage === perPage}
    >
      {perPage}
    </button>
  )
}