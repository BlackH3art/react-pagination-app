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

      <label>
        <p>
          Find product by id:
        </p>
      </label>
      
      <input 
        className=""
        type="text" 
        onChange={handleChange}
        value={idToFetch}
      />
      
      <button type="submit">Search</button>

    </form>
  )
}