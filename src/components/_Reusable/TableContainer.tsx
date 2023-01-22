import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TableContainer: FC<Props> = ({ children }) => (
  <div className="flex flex-col items-center border-2 border-[rgb(210, 217, 238)] px-12 py-5 bg-white w-full md:w-3/5 rounded-2xl">
    {children}
  </div>
)