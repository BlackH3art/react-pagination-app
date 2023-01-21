import { FC } from "react";
import { SearchBar } from "./SearchBar";

export const SearchSection: FC = () => {

  return ( 
    <section className="flex h-32 w-full items-center justify-center">
      <div className="flex h-full w-full md:w-4/5 lg:w-3/5 items-center justify-center">
        
        <SearchBar />
        
      </div>
    </section>
  );
}