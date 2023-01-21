import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  handler: () => void;
  disabled: boolean;
}

export const PaginationButton: FC<Props> = ({ icon, handler, disabled }) => {

  return (
    <button 
      className="" 
      style={{ color: disabled ? "gray" : "black" }}
      onClick={handler} 
      disabled={disabled} 
    >
      {icon}
    </button>
  )
}