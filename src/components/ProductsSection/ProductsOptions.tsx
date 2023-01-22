import { FC } from 'react';
import { OptionButton } from '../_Reusable/OptionButton';
import { Title } from '../_Reusable/Title';

export const ProductsOptions: FC = () => {

  return (
    <div className="flex justify-between border-b-[1px] pb-2 w-full">

      <Title title='Products' />

      <div className="">
        <OptionButton perPage={5} />
        <OptionButton perPage={10} />
        <OptionButton perPage={15} />
      </div>
    </div>
  )
}