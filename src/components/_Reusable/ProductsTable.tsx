import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProductsTable: FC<Props> = ({ children }) => {

  const tableHeaders = ["id", "name", "year"];

  return (
    <table className="w-full md:w-4/5 border-separate border-spacing-y-2">
      <thead>
        <tr>
          {tableHeaders.map((header, idx) => (
            <th key={idx} className="pt-3 px-2">
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