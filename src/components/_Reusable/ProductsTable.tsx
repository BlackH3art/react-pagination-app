import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProductsTable: FC<Props> = ({ children }) => {

  const tableHeaders = ["id", "name", "year"];

  return (
    <div className="flex justify-center border-2 border-[rgb(210, 217, 238)] px-12 py-5 bg-white w-full md:w-3/5 rounded-2xl">
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
    </div>
  )
}