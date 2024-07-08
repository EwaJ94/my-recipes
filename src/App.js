import Category from "./components/Category"
import Content from "./components/Content"
import Search from "./components/Search"
import { useState } from "react"
import axios from "axios"


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState ([])
  const [dishType, setDishType] = useState("")
  const [searchedWord, setSearchedWord] = useState("")

  const appId = "ae8e0993"
  const appKey = "9f769dfec4f99a9746075132ba6e2422"

    const fetchData = async (category) => {
      const url = 'https://api.edamam.com/api/recipes/v2'
      const params = {
        type: "public",
        q: category,
        app_id: appId,
        app_key: appKey,
        dishType: category
      }

      try {
        const response = await axios.get(url, {params})
        const fetchedRecipes = response.data.hits || []
        setRecipes(fetchedRecipes)
        setFilteredRecipes(fetchedRecipes)
      } catch (error) {
        console.error("Error fetching recipes:", error)
        setRecipes([])
        setFilteredRecipes([])
      }

    };
    
    const handleCategoryClick = (category) => {
      setDishType(category)
      setSearchedWord("")
      fetchData(category)
    }

    const handleSearch = (word) => {
      setSearchedWord(word)
      getFilteredRecipes(word, recipes)
    }

    const getFilteredRecipes = (word, recipesToFilter) => {
      if (!word) {
        setFilteredRecipes(recipesToFilter)
      } else {
        const filtered = recipesToFilter.filter(recipe => 
          recipe?.recipe?.label?.toLowerCase().includes(word.toLowerCase())
        )
        setFilteredRecipes(filtered)
      }
    }

  return <div>
    <Search onSearch={handleSearch}/>
    <section className="main-part">
      <Category onCategoryClick={handleCategoryClick} />
      <Content recipes={recipes} dishType={dishType} filterRecipes={filteredRecipes}/>
    </section>
    </div>
}

export default App
