import { FC,ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const TitleContainer: FC<Props> = ({ children }) => (
  <div className="flex justify-between border-b-[1px] pb-2 w-full">
    {children}
  </div>
)