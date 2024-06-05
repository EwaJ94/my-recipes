import "./Search.css"
import food from "../img/food.ico"

const Search = () => {
  return <section className="search-field">
      <img src={food} className="icon" alt="fork and knife" />
      <form>
        <input type="text" name="search-recipe" className="search-recipe" />
        <input type="submit" value="Search" className="find-button" />
      </form>
    </section>
}

export default Search
