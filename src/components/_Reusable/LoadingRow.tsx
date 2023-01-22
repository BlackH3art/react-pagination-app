import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

export const LoadingRow: FC = () => (
  <tr>
    <td className='p-1' colSpan={3}>
      <div className="flex justify-center">
        <ClipLoader />
      </div>
    </td>
  </tr>
)