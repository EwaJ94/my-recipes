import "./Search.css"

import food from "../img/food.ico"

const Search = ({data}) => {
  const formSubmit = (e) => {
    e.preventDefault()

    console.log(data);

  }

  return <section className="search-field">
      <img src={food} className="icon" alt="fork and knife" />
      <form>
        <input type="text" name="search-recipe" className="search-recipe" />
        <input onClick={formSubmit} type="submit" value="Search" className="find-button" />
      </form>
    </section>
}

export default Search
