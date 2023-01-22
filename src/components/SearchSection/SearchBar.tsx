import { ChangeEvent, ChangeEventHandler, FC, FormEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar: FC = () => {

  const [idToFetch, setIdToFetch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate(`/${idToFetch}`);
  }

  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(!isNaN(Number(e.target.value))) setIdToFetch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label className="block mb-2 pl-2">
        <p>
          Find product by id:
        </p>
      </label>
      
      <input 
        className="p-2 bg-[rgba(255,255,255,0.50)] focus:bg-[rgba(255,255,255,0.80)] rounded-lg border-[1px] focus:border-myPink outline-none duration-300"
        type="text" 
        placeholder="id"
        onChange={handleChange}
        value={idToFetch}
      />
      
      <button type="submit" className="bg-myPink py-2 px-4 hover:bg-[rgb(216,15,122)] duration-300 rounded-lg text-white font-semibold ml-2">
        Search
      </button>

    </form>
  )
}