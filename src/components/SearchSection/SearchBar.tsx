import { FC } from "react"

export const SearchBar: FC = () => {

  const handleSubmit = () => {}
  const handleChange = () => {}

  return (
    <form onSubmit={handleSubmit}>

      <input 
        className=""
        type="text" 
        onChange={handleChange}
      />
      
      <button type="submit">Search</button>

    </form>
  )
}