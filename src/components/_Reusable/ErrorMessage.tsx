import { FC } from 'react';

interface Props {
  msg: string;
  code: number;
}

export const ErrorMessage: FC<Props> = ({ msg, code }) => (
  <div className="flex flex-col items-center justify-center h-32">
    <h2 className='text-xl font-semibold'>
      Error {code}
    </h2>

    <p>
      {msg}
    </p>
  </div>
)