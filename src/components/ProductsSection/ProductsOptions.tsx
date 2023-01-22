import { FC } from 'react';

import { OptionButton } from '../_Reusable/OptionButton';
import { Title } from '../_Reusable/Title';
import { TitleContainer } from '../_Reusable/TitleContainer';

export const ProductsOptions: FC = () => {

  return (
    <TitleContainer>

      <Title title='Products' />

      <div className="">
        <OptionButton perPage={5} />
        <OptionButton perPage={10} />
        <OptionButton perPage={15} />
      </div>
    </TitleContainer>
  )
}