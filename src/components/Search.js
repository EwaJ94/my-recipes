import "./Search.css"
import food from "../img/food.ico"
import { useState } from "react"


const Search = ({onSearch}) => {
  const [searchedWord, setSearchedWord] = useState ("")
  

  const handleInputChange = (e) => {
    setSearchedWord(e.target.value)
    
  }
  
  const formSubmit = (e) => {
    e.preventDefault()
    
    console.log(searchedWord);
    onSearch(searchedWord)
    setSearchedWord("")
  }

 

  return <section className="search-field">
      <img src={food} className="icon" alt="fork and knife" />
      <form onSubmit={formSubmit}>
        <input onChange={handleInputChange} value={searchedWord} type="text" name="search-recipe" className="search-recipe" />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </section>
}

export default Search
