import "./Search.css"
import { useState } from "react"


const Search = ({onSearch, changeIconStyle}) => {
  const [searchedWord, setSearchedWord] = useState ("")

  const handleInputChange = (e) => {
    setSearchedWord(e.target.value)
    
    
  }
  
  const formSubmit = (e) => {
    e.preventDefault()
    
    changeIconStyle()
    onSearch(searchedWord)
    setSearchedWord("")
  }

 

  return <section className="search-field">
      <form  onSubmit={formSubmit} >
        <input onChange={handleInputChange} value={searchedWord} type="text" name="search-recipe" className="search-recipe" />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </section>
}

export default Search
