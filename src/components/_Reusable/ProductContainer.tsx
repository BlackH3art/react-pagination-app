import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProductContainer: FC<Props> = ({ children }) => {

  return(
    <section className="flex h-64 w-full justify-center bg-blue-200">
      <div className="flex flex-col h-full w-full md:w-4/5 lg:w-3/5 items-center bg-green-600">
        {children}
      </div>
    </section>
  )
}