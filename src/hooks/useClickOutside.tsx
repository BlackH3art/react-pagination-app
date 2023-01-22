import { useEffect } from "react";

export const useClickOutside = (node: React.MutableRefObject<null>, handler: () => void) => {
  
  const handleExecution = (event: Event) => {
    if(node.current === event.target) {
      handler();
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', handleExecution);

    return () => document.removeEventListener('mousedown', handleExecution);
  });

  return node;
}