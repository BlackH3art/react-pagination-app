import { FC, ReactNode } from "react";

interface Props {
  children: string | number | ReactNode;
}

export const ProductCell: FC<Props> = ({ children }) => (
  <td className="p-2 text-center">
    <p>
      {children}
    </p>
  </td>
);