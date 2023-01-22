import { FC } from 'react';

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => (
  <h2 className="text-2xl font-bold">
    {title}
  </h2>
)