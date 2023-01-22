import { FC, ReactNode } from 'react';

interface Props {
  th: string;
  details: string | ReactNode;
}

export const DetailsRow: FC<Props> = ({ th, details }) => (
  <tr className='flex justify-between py-3 border-b-[1px]'>
    <th>
      {th}
    </th>

    <td>
      {details}
    </td>
  </tr>
)