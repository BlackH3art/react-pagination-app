import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  handler: () => void;
  disabled: boolean;
}

export const PaginationButton: FC<Props> = ({ icon, handler, disabled }) => {

  return (
    <button 
      className="p-2 rounded-full hover:bg-slate-200 duration-300" 
      style={{ color: disabled ? "gray" : "black" }}
      onClick={handler} 
      disabled={disabled} 
    >
      {icon}
    </button>
  )
}