import { FC } from "react";

interface Props {
  id: number;
  name: string;
  year: number;
  bg: string;
}

export const ProductRow: FC<Props> = ({ id, name, year, bg }) => {

  return (
    <tr style={{ backgroundColor: `${bg}`}}>
      <td>
        {id}
      </td>

      <td>
        {name}
      </td>

      <td>
        {year}
      </td>
    </tr>
  )
}