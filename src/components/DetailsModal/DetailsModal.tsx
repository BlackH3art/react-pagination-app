import { FC, useContext, useRef } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { useClickOutside } from '../../hooks/useClickOutside';

import { Title } from '../_Reusable/Title';
import { TitleContainer } from '../_Reusable/TitleContainer';
import { DetailsRow } from './DetailsRow';

interface Props {
  color: string;
}

const ColorElement: FC<Props> = ({ color }) => (
  <div 
    className="rounded-lg px-4"
    style={{ backgroundColor: `${color}`}}
  >
    {color}
  </div>
)

export const DetailsModal: FC = () => {

  const { selectedProduct, setSelectedProduct, setShowDetails } = useContext(ProductsContext);
  const node = useRef(null);

  const closingSpaceRef = useClickOutside(node, () => {
    setSelectedProduct(null);
    setShowDetails(false);
  });
  
  

  return (
    <div className="flex items-center justify-center bg-[rgba(0,0,0,0.20)] w-full h-full absolute top-0 backdrop-blur-" ref={closingSpaceRef} >
      <div className="flex flex-col items-center bg-white w-[95%] md:w-96 px-8 py-5 rounded-lg border-[1px] border-[rgb(210, 217, 238)]">

        <TitleContainer>
          <Title title='Details' />
        </TitleContainer>

        <table className='w-[90%] mt-5'>
          <tbody>
            {selectedProduct ? (
              <>
                <DetailsRow th="id" details={selectedProduct.id} />
                <DetailsRow th="name" details={selectedProduct.name} />
                <DetailsRow th="color" details={<ColorElement color={selectedProduct.color} />} />
                <DetailsRow th="year" details={selectedProduct.year} />
                <DetailsRow th="pantone value" details={selectedProduct.pantone_value} />
              </>
              ) : null}
          </tbody>
        </table>

      </div>
    </div>
  )
}