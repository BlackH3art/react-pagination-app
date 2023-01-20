import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProductsTable: FC<Props> = ({ children }) => {

  const tableHeaders = ["id", "name", "year"];

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header, idx) => (
            <th key={idx}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {children}
      </tbody>
    </table>
  )
}