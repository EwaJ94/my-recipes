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
        setRecipes(response.data.hits)
        setFilteredRecipes(response.data.hits)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      }

    };
    
    const handleCategoryClick = (category) => {
      setDishType(category)
      fetchData(category)
      console.log(category);
    }

    const handleSearch = (word) => {
      setSearchedWord(word)
      filterRecipes(word)
    }

    const filterRecipes = (word) => {
      if (!word) {
        setFilteredRecipes(recipes)
      } else {
        const filtered = recipes.filter(recipe => 
          recipes.recipe.label.toLowerCase().include(word.toLowerCase())
        )
        setFilteredRecipes(filtered)
      }
    }

  return <div>
    <Search onChange={handleSearch}/>
    <section className="main-part">
      <Category onCategoryClick={handleCategoryClick} />
      <Content recipes={recipes} dishType = {dishType}/>
    </section>
    </div>
}

export default App
