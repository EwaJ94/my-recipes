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
    onSearch(setSearchedWord)
    setSearchedWord("")
  }

 

  return <section className="search-field">
      <img src={food} className="icon" alt="fork and knife" />
      <form>
        <input onChange={handleInputChange} value={searchedWord} type="text" name="search-recipe" className="search-recipe" />
        <input onClick={formSubmit} type="submit" value="Search" className="search-button" />
      </form>
    </section>
}

export default Search
